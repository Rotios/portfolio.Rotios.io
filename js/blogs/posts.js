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
                    <br/>
                    <br/>
                    For this article, I will assume that you know about microservice architectures, have a passing knowledge of AWS infrastructure, and 
                    have developed (or are developing) a Java SpringBoot application.
                </p>
                
                {/* <PrismCode component="pre" className="language-css">
                    {`{
    body {
        font: 100% Helvetica, sans-serif;
        color: #333;
    }

    .box {
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        -ms-border-radius: 10px;
        border-radius: 10px;
    }
}`}
                </PrismCode> */}
            </div>

            <div>
                <h1>Logging in an AWS SpringBoot Microservice</h1>
                <hr/>
                <p>
                    Key to any microservice architecture is the ability to quickly react to changes in the cloud ecosystem. Whether it is due to higher than average
                    user volume or a failing instance, applications must be able to scale quickly without compromising the user experience. Unfortunately as applications scale, 
                    the number of logs and the ability to track those logs quickly becomes unmanageable without a log manager like an ELK stack. 
                </p>

                <p>
                    Imagine for instance that you have 2 microservices A and B where A depends on B. Traffic escalates at 6PM, and A and B are forced to scale up.
                    Perhaps 3 more instances of each are created to deal with the added load. A and B finally scale back down at 11PM. During those 5 hours, 10 instances (5 of A and 5 of B)
                    were running simultaneously, generating logs and dealing with traffic. Here is an example of a log from one A instance:
                </p>

                <PrismCode component="pre">
                    {`2019-01-06 04:12:32.542  INFO 23549 --- [           main] o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/webjars/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]
2019-01-06 04:12:32.982  INFO 23549 --- [           main] o.s.w.s.handler.SimpleUrlHandlerMapping  : Mapped URL path [/**] onto handler of type [class org.springframework.web.servlet.resource.ResourceHttpRequestHandler]`}
                </PrismCode>
                
                <p>
                    The ability to dupliate instances has blessed us with the ability to better scale microservices for our customers, but it has also 
                    come with a cost. With hundreds or even thousands of duplicate microservice instances active on the cloud at any given time, 
                    tracking logs to their source has become more of a challenge and yet absolutely integral towards ensuring <strong>consistent</strong> 
                    and <strong>correct</strong> application behaviour.
                </p>

                <p>
                    
                </p>
            </div>
        </div>,
        'title' : 'Customized Logging in SpringBoot'
    }
}

