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
                    The Main Idea
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

                <h4>How to Get the Required Information</h4>
                <p>
                    Luckily, if you are using Amazon ECS and you keep your td-agent up to date, Amazon provides an easy way to get additional metadata about a container
                    through a json file. Just follow <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-metadata.html">these instructions</a>.
                </p>

                <p>
                    Once you have completed the ECS Metadata setup above, create a simple Java Spring bean to retrieve that data upon start time. Some sample code is provided below:
                </p>

                
                <PrismCode component="pre" className="language-java">
{
`package com.example.logging.aws;
public class AwsMetadataProdiver {
    
    @Value("\${ECS_METADATA_FILE:path-to-file}")
    private String metadataFilePath;

    private EcsMetadataModel ecsMetadataModel = null;

    @PostConstruct
    public void init() {
        try {
            File file = ResourceUtils.getFile(metadataFilePath);
            
            // Use Jackson ObjectMapper to read JSON File
            this.ecsMetadataModel = new ObjectMapper().readValue(file, EcsMetadataModel);
        } catch (Exception e) {
            // Handle exception(s) based on your preferences
        }
    }

    @Override
    public void toString() {
        if (this.ecsMetadataModel != null) {
            return this.ecsMetadataModel.toString();
        }

        return "NO ECS METADATA FOUND";
    }

}

// Make sure Jackson Json mapper ignores any key's found in the data not added in our model below.
@JsonIgnoreProperties(ignoreUnknown = true)
public class EcsMetadataModel {
        
    // @JsonProperty allows us to name the variable differently from the key. Useful for linting or to 
    // shortern verbose or otherwise badly named properties.
    @JsonProperty("Cluster")
    private String cluster;

    @JsonProperty("ContainerInstanceARN")
    private String instanceARN;

    @JsonProperty("TaskARN")    
    private String taskARN;

    @JsonProperty("ContainerID")        
    private String containerID;

    @JsonProperty("ImageID")    
    private String imageID;

    // Continue for any other data you wish to use + add optional GETTERS/SETTERS

    // Override toString in whatever format you want your logger to be. For this example, 
    // we are using Key=Value format separated by "|". You may also wish to create a separate
    // method for accessing this data.
    @Override
    public void toString(){
        return  "Cluster=" + this.cluster +
                "|ContainerInstanceARN=" + this.instanceARN +
                "|TaskARN=" + this.taskARN + 
                "|ContainerID=" + this.containerID +
                "|ImageID=" + this.imageID + "|"; 
    }
}`
}
                </PrismCode>
                <p>
                    Having received this information, you may also wish to add data from other AWS resources. For example, you can 
                    retrieve <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">ec2 instance identity metadata</a> through a simple local rest call.
                    Doing so requires a simple change to the AwsMetadataProdiver class and adding another model.
                </p>

                                <PrismCode component="pre" className="language-java">
{
`package com.example.logging.aws;

public class AwsMetadataProdiver {
    
    @Value("\${ECS_METADATA_FILE:path_to_file}")
    private String metadataFilePath;
    
    @Value("\${EC2_METADATA_URI:http://169.254.169.254/latest/dynamic/instance-identity/document}")
    private String ec2MetadataUri;

    private EcsMetadataModel ecsMetadata = null;
    private Ec2MetadataModel ec2Metadata = null;

    @PostConstruct
    public void init() {
        if (!StringUtils.isEmpty(metadataFilePath)) {
            try {
                File file = ResourceUtils.getFile(metadataFilePath);
                
                // Use Jackson ObjectMapper to read JSON File
                this.ecsMetadataModel = new ObjectMapper().readValue(file, EcsMetadataModel.class);
            } catch (Exception e) {
                // Handle exception(s) based on your preferences
            }
        }

        if (!StringUtils.isEmpty(ec2MetadataUri)) {
            try {
                RestTemplate restTemplate = new RestTemplate();

                // Also possible to convert to Ec2MetadataModel class directly, but I found this way gives me 
                // less problems.
                ResponseEntity<String> response = restTemplate.getForEntity(metadataFilePath, String.class);
                String metadata = response.getBody();
                
                this.ec2Metadata = new ObjectMapper().readValue(metadata, Ec2MetadataModel.class);
            }
        }
    }

    @Override
    public void toString() {
        String metadata = "";

        if (this.ecsMetadata != null) {
            metadata += this.ecsMetadata;
        }

        if (this.ec2Metadata != null) {
            metadata += this.ec2Metadata;
        }

        if (StringUtils.isEmpty(metadata)) {
            // Handle this case as you wish.
            return "No Metadata Found";
        }

        return metadata;
    }
}

// Ec2MetadataModel class left as an exercise for the reader...
`
}
                </PrismCode>
                <p>
                    Ok, now that we have all of the information, it's time for the hard part - actually using that information to
                    enhance our logs.
                </p>
            
                <h1>
                    Updating the Logging Appenders
                </h1>

                <p>
                    Since Log4j2 and Logback are distinct logging frameworks, we will need to generate different appenders for each.
                    For the sake of brevity, we will be adding a new Console Appender to the root appender. In practice, you may wish to iterate
                    over each logger and copy distinct appenders in each with your new format or adding a RollingFileAppender instead.
                </p>

                <h4>Log4J2 Configuration</h4>
                <p>
                    Configuring the Log4J2 Root Logger requires getting the configuration of the Root Logger from the LogManager. Once retrieved, 
                    you can create the appender and add it to the configuration. However, to create the appender, you need to define the a format. 
                    Doing so requires either getting the preconfigured format from the root logger's appenders or adding our own default pattern.
                    In the code below, we will first look through the root logger's appenders for a logging format or return our own custom format if none exists.
                    Once that is retrieved, we will prepend the data we got earlier from AWS.
                </p>

<PrismCode component="pre" className="language-java">
{
`package com.example.logging.log4j2;
public class Log4J2Configurator extends ConfigurationListener {

    private AwsMetadataProdiver awsMetadataProvider;
    private static Appender customAppender;
    private static final String DEFAULT_PATTERN = "%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n";

    public Log4J2Configurator(AwsMetadataProdiver awsMetadataProvider) {
        this.awsMetadataProvider = awsMetadataProvider;
        this.customAppender = null;
    }

    @PostConstruct
    public void init() {
        org.apache.log4j.spi.LoggerContext context = LogManager.getContext(false);
        if (context instanceof org.apache.log4j.core.LoggerContext) {
            Configuration configuration = ((org.apache.log4j.core.LoggerContext) context).getConfiguration();
            this.editConfiguration(configuration);
            configuration.addListener(this);
        }
    }

    @Override
    public void onChange(Reconfigurable reconfigurable) {
        if (reconfigurable instanceof Configuration) {
            this.editConfiguration((Configuration) reconfigurable);
        }
    }

    public void editConfiguration(Configuration configuration) {
        if (configuraiton == null) return;
        
        LoggerConfig rootConfig = configuration.getLoggerConfig(LogManager.ROOT_LOGGER_NAME);

        if (this.customAppender != null) { 
            // You may also create a FileAppender or another type of appender. 
            // Always start the appender before adding it to the logger.
            String pattern = this.awsMetadataProvider.toString() + getPatternLayout(rootConfig);
            this.customAppender = ConsoleAppender.createDefaultAppenderForLayout(pattern);
            this.customAppender.start();
        } 

        if (rootConfig.getAppenders().contains(this.customAppender.getName())) {
            return;
        }
        
        rootConfig.addAppender(newAppender, rootConfig.getLevel(), rootConfig.getFilter());            

        // Update the loggers with the latest appender.
        configuration.getLoggerContext().updateLoggers();
    }

    // Iterate through each appender to get a preconfigured logging format or return the default
    private String getPatternLayout(LoggerConfig rootConfig) {
        Map<String, Appender> appenders = rootConfig.getAppenders();

        for (Appender appender : appenders.keys()) {
            if (appender != null && appender.getLayout() != null) {
                Layout layout = appender.getLayout();
                if (layout instanceof PatternLayout) {
                    if (!StringUtils.isEmpty(((PatternLayout) layout).getConversionPattern())) {
                        return ((PatternLayout) layout).getConversionPattern();
                    }
                }     
                else if (layout instanceof EnhancedPatternLayout) {
                    if (!StringUtils.isEmpty(((EnhancedPatternLayout) layout).getConversionPattern())) {
                        return ((EnhancedPatternLayout) layout).getConversionPattern();
                    }
                }                 
            }
        }

        return DEFAULT_PATTERN;
    }
}
`
}
                </PrismCode>
                <p>
                    The above code edits the Log4J2 configuration each time a configuration change occurs. Because of the way we generate the appender,
                    using ConsoleAppender.createDefaultAppenderForLayout api, we need to store the appender to ensure we don't unnecessarily recreate it.
                    A better solution would be to set a custom name for the appender you create using the ConsoleAppender Builder method, or if you copy 
                    and edit the logger's appenders (which I will go over in another post), copy the appender's default name with a custom tag.
                </p>

                <p>
                    Now for the Logback Configuration.
                </p>

                <h4>The Logback Configuration</h4>

                <p>
                    The Logback configurator will follow a similar pattern to the Log4J2 configurator. We will create an appender using
                    either a predefined pattern from a current logger appender or a predefined custom format prepended with our data. 
                    Example code below:
                </p>

                <PrismCode component="pre" className="language-java">
{
`package com.example.logging.logback;
public class LogbackReconfigurer {
    private static final String DEFAULT_PATTERN = "%d{yyyy-MM-dd HH:mm:ss} %-5p %c{1}:%L - %m%n";
    private static final String CUSTOM_APPENDER_NAME = "my_custom_appender";

    private AwsMetadataProdiver awsMetadataProvider;
    private static Appender<ILoggingEvent> customAppender;

    public Log4J2Reconfigurer(AwsMetadataProdiver awsMetadataProvider) {
        this.awsMetadataProvider = awsMetadataProvider;
        this.appenderName = null;
    }

    @PostConstruct
    public void editConfiguration() {
        String format = this.awsMetadataProvider.toString();

        LoggerContext context = (LoggerContext) LoggerFactory.getILoggerFactory();

        ch.qos.logback.classic.Logger logger = context.getLogger(Logger.ROOT_LOGGER_NAME);

        // Create an encoder for the metadata we have selected.
        PatternLayoutEncoder encoder = new PatternLayoutEncoder();
        patternLayoutEncoder.setContext(context);
        patternLayoutEncoder.setCharset("UTF-8");
        patternLayoutEncoder.setImmediateFlush(true);
        patternLayoutEncoder.setPattern(this.awsMetadataProvider.toString());
        patternLayoutEncoder.setOutputPatternAsHeader(false);
        patternLayoutEncoder.start();

        // Create the console appender. Make sure to start it. You may wish to use a file appender instead.
        ConsoleAppender<ILoggingEvent> consoleAppender = new ConsoleAppender<ILoggingEvent>();
        consoleAppender.setContext(context);
        consoleAppender.setName(CUSTOM_APPENDER_NAME);
        consoleAppender.setEncoder(encoder);
        consoleAppender.start();

        // Add the appender to the logger
        logger.addAppender(consoleAppender);

        return logger;
    }

    // Iterate through each appender to find a preconfigured logger format or return the default
    private String getPatternLayout(Logger logger) {
        Iterator<Appender<ILoggingEvent>> appenderIt = logger.iteratorForAppenders();

        while (appenderIt.hasNext()) {
            Appender<ILoggingEvent> appender = appenderIt.next();

            if (appender != null && appender instanceof OutputStreamAppender) {
                Encoder<ILoggingEvent> encoder = ((OutputStreamAppender) appender).getEncoder();
                if (encoder instanceof PatternLayoutEncoderBase) {
                    if (!StringUtils.isEmpty(((PatternLayoutEncoderBase) encoder).getPattern())) {
                        return ((PatternLayoutEncoderBase) encoder).getPattern();
                    }
                }
            }
        }

        return DEFAULT_PATTERN;
    }
}
`
}
                </PrismCode>

                <p>
                    The above code will (upon the creation of the bean) get the root logger configuration and create a new console appender. To create the bean, we 
                    now need to create the final piece, a configuration file.
                </p>

                <h4>The Spring Configuration File</h4>
                <p>
                    The above classes are useful if and only if we create the beans for them. To do so, we ned to create a Spring Configuration file for them. However, as this configuration 
                    is meant to be used in a library, and most applications will not use both logback and log4j2, we need to ensure that they are created if the underlying frameworks exist.
                    We can do so easily using @Conditional annotations from Spring Boot.
                </p>

                                <PrismCode component="pre" className="language-java">
{
`package com.example.logging.config;
@Configuration
public class LoggingConfiguration {

    @Bean
    public AwsMetadataProdiver awsMetadataProdiver(){
        return new AwsMetadataProdiver();
    }
    
    @Bean
    @ConditionalOnClass(value={"org.apache.logging.log4j.Logger", "org.apache.logging.log4j.LogManager"})
    public Log4JReconfigurer log4jReconfigurer() {
        return new Log4JReconfigurer(awsMetadataProdiver());
    }

    @Bean
    @ConditionalOnClass(value={"ch.qos.logback.classic.Logger", "org.slf4j.LoggerFactory"})
    public LogbackReconfigurer LogbackReconfigurer() {
        return new LogbackReconfigurer(awsMetadataProdiver());
    }

}
`
}
                </PrismCode>

                <p>
                    Another thing we need to ensure is that the configuration file is actually run when the library is added without having to add any additional data. Thankfully Spring allows 
                    this by adding a spring.factories file in resources/META-INF directory.
                </p>

                <PrismCode component="pre" className="language-properties">
{
`org.springframework.boot.autoconfigure.EnableAutoConfiguration=\
com.example.logging.config.LogginConfiguration`
}
                </PrismCode>
                <p>
                    With all this set, you can now package the code and build it into a simple logging starter that will add a console appender to any logback or log4j2 logger 
                </p>
            </div>
        </div>,
        'title' : 'Customized Logging in SpringBoot'
    }
}