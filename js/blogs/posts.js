import React from 'react'
import PrismCode from 'react-prism'

export default {
    'customized-logging-in-springboot' : { 
        'content' : <div> 
            <div>
                <h1>Intro</h1>
                <hr/>
                <p>
                    Logs are an integral part of any software. They provide valuable runtime information about our systems, their active sessions,
                    their state, and so much more. Learning how to correctly log a software's actions is one of the most important life skills
                    all software engineers should master, and with the advent of the cloud and microservices, it has become that much more necessary. 
                </p>
                <p>
                    For this article, I will assume that you know about microservice architectures, have a passing knowledge of AWS infrastructure, and 
                    have developed (or are developing) a Java SpringBoot application with either Log4J2 or Logback as your Logging Framework.
                </p>
                
            </div>

            <div>
                <h1>The Trouble with Logging in a Microservice Architecture</h1>
                <hr/>
                <p>
                    Key to any microservice architecture is the ability to quickly react to changes in the cloud ecosystem. Whether it is due to higher than average
                    user volume or a failing instance, applications must be able to scale quickly without compromising the user experience. Unfortunately as applications scale, 
                    the number of logs and the ability to track those logs quickly becomes unmanageable without a log manager like an ELK stack. 
                </p>

                <p>
                    Imagine for instance that you have two microservices <strong>A</strong> and <strong>B</strong> running on an ECS cluster as Docker images. Both require connections to the same MongoDB database. Traffic escalates at 6PM, and <strong>A</strong> and <strong>B</strong> are forced to scale up.
                    Perhaps three more instances of each are created to deal with the added load. <strong>A</strong> and <strong>B</strong> finally scale back down at 11PM. During those 5 hours, 10 instances (5 of <strong>A</strong> and 5 of <strong>B</strong>)
                    were running simultaneously, generating logs and dealing with traffic. At some point, this error appears in one of our instance:
                </p>

                <PrismCode component="pre">
                    {`2019-01-06 18:01:32.542  ERROR 23549 --- [           main] x.y.z.MyClass :  An error occured while trying to connect to the database. Could not create connection to MongoDB server http://my-mongo-db.link:7174`}
                </PrismCode>

                <p>
                    What information can we gather from this log? For one, notice the log's timestamp is dated at 6PM. We know that this was the moment our system began to autoscale, which implies that [probably] one of our new instances failed 
                    to initiate correctly. Assuming the DB URL is correct, we can infer that the application is [probably] misconfigured. Unfortunately, without more to go on it is impossible to determine exactly which application we need to check
                    to identify the cause of the misconfiguration.
                </p>


                <p>
                    This example highlights the problem with microservices and distributed systems in general. While simple, we could easily expand this to more critical systems or events that could be even harder to trace. For example,
                    perhaps an EC2 instance in particular is having issues, or one instance encountered a bug none have seen before. You could [probably] swim through each applications logs to determine the cause [eventually], but the time
                    and effort spent doing so would severely impair your productivity and overall usefulness towards future development.
                </p>
                <p>
                    Ultimately, the ability to dupliate instances has allowed us to better scale microservices for our customers, but it has also 
                    come at a cost. With hundreds or even thousands of duplicate microservice instances active on the cloud at any given time, 
                    tracking logs to their source has become more of a challenge and yet absolutely integral towards ensuring <strong>consistent</strong> and <strong>correct</strong> application behaviour.
                </p>

            </div>

            <div>
                <h1>The ELK Solution</h1>
                <hr/>
                <p>
                    Solving for this lack of information is a challenging prospect for many individuals and companies. Fortunately, there are plenty of ready made solutions. For example, I briefly mentioned one solution earlier, the ELK stack. ELK stands for 
                    Elasticsearch, Logstash and Kibana, the three intiial components in the ELK Stack. Each of the three are a distinct tool that work together to provide seamless log shipping and tracking.
                </p>

                <p>
                    In an ELK stack, Logstash allows developers to ingest, process, tag, and transform data from multiple sources (such as microservices) before shipping it to the next layer in the stack, Elasticsearch. At this point, the transformed data is stashed
                    using keywords and tags to allow for easier data searching and analyzing. Finally, Kibana lets developers query and visualize the data in charts and graphs. Other products, such as the Beats data shipper, further adds to the functionality of the 
                    ELK stack. A full description and use case for ELK is outside the scope of this article, but below is a simple example of how ELK can help solve our logging issue.
                </p>

                <p> 
                    Take the example we discussed above. Assume we run a FileBeat instance (an elastic log shipper) on each of our EC2 instances to ship the microservices' logs to our own Logstash. When the logs are shipped, we have the FileBeat log shipper append a few important
                    bits of information: 
                </p>

                <ol>
                    <li>
                        The name, version and ID of our Docker image
                    </li>
                    <li>
                        The EC2 instance ID and IP address
                    </li>
                    <li>
                        The ECS cluster name. 
                    </li>
                </ol>

                <p>Thus, the example log above would be shipped as follows:</p>

                <PrismCode component="pre" className="language-json">
                    {
`{
    "image_name" : "A",
    "image_version" : "1.0",
    "ec2_instance_id" : "11aa22bb33cc",
    "ip_address" : "192.168.0.1",
    "ecs_cluster_name" : "my_test_cluster",
    "log": "2019-01-06 18:01:32.542  ERROR 23549 --- [           main] x.y.z.MyClass :  An error occured while trying to connect to the database. Could not create connection to MongoDB server http://my-mongo-db.link:7174"
}`}
                </PrismCode>
                {/* <blockquote><p>Note: This example is not necessarily how the output would look like.</p></blockquote> */}

                <p>
                    With just this information and Kibana, we can much more easily determine the cause of the issue. Just log onto Kibana, sort by the instance ID and application type, and 
                    skim through the available logs. On top of that, even before we do an in-depth search, we also know which kind of microservice (<strong>A</strong> or <strong>B</strong>) logged this message, and
                    its version. The latter is especially important when working in a CICD (Continuous Integration | Continuous Delivery) model. You never know when a version mismatch could be the cause
                    of your issue.
                </p>

                <p>
                    Even with this structure in place, there may be extra information you want to place directly in the logs. For example, there may be meta information about each instance of a microservice that needs to be 
                    tagged and logged that the log shipper could not do for you. Or perhaps it would be better to have the data repeated or originating from the microservice's logs. Below I will describe a method for adding
                    custom metadata into Spring Boot application's logs without severely impacting the performance.
                </p>

                <h1>Customizing SpringBoot Logs (Log4J2 and Logback)</h1>
                <hr/>

                <p>
                    For Java applications, there are two main logging framework implementations widely used in SpringBoot applications: Log4J2 and Logback. Log4J, the predecessor to Log4J2 is also used often, but
                    Log4J2 has greatly expanded its functionality. Furthermore, SpringBoot automatically defaults to Logback as its main logging Implementation. For those reasons I will focus solely on 
                    the Log4J2 and Logback Frameworks. 
                </p>

                <blockquote><strong>Note:</strong> SLF4J, while the true default logging framework for SpringBoot, is only a facade, and therefore the low level changes we are about to perform cannot be made to it. 
                </blockquote>

                <p>Before we can get into the individual implementations, I'll explain the general process we are going to use to expose the necessary information.</p>

                <h4>
                    The main idea
                </h4>

                <p>The simplest way to get the above information into any SpringBoot microservice is to add the information to the application's logging appender(s). There are a few ways to accomplish this:</p>
                <ul>
                    <li>Altering the Configuration File</li>
                    <li>Altering the Appenders at Runtime</li>
                </ul>

                <p>The first method is the most cost efficient, as the application has the fields set prior to runtime. This ensures that the application logs what the user wants and ensures that no errors will occur
                    when running the application. Unfortunately, this method is also not very scalable, as it forces you to update every appender in every application with the latest format, and scripts can only go so far
                    when every team has their own logging preferences.
                </p>

                <p>To solve for these issues, we will be taking the second route. We will alter the application's appenders at runtime by creating our own identical appenders. The benefit of this is that we can target most 
                    applications that use log4j2 or logback without worrying about the actual configuration files. All that they have to use is add a dependency to their project and, if necessary, change their logging implementation's
                    version.
                </p>

                <p>Now for the next step...</p>

                <h4>How to get the required information</h4>
                <p>TBC</p>

            </div>
        </div>,
        'title' : 'Customized Logging in SpringBoot'
    }
}

