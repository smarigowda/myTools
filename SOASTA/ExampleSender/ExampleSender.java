package org.example;
import org.example.ExampleSenderOutput;
public class ExampleSender
{
  public ExampleSender() {
  }

  public ExampleSenderOutput sendSomething(String textToSend) throws Throwable {
    Thread.sleep(30000);
    ExampleSenderOutput out = new ExampleSenderOutput();
    
    out.m_operation = "MyOperation";
    out.m_url = "http://something.org/something";
    out.m_completionType = "Success";
    out.m_failureText = null;
    out.m_validationPassed = true;
    out.m_textSent = textToSend;
    out.m_textReceived = "Received text here";

    out.m_deltaFromScheduledStart = 0;
    out.m_duration = 1234;
    out.m_bytesSent = textToSend.length();
    out.m_bytesReceived = 321;
    out.m_totalPortRetryCount = 0;
    out.m_totalPortRetryTime = 0;
    out.m_connectionEstablishTime = 100;
    out.m_sendTime = 777;
    out.m_receiveTime = 555;
    out.m_totalTime = 3000;
    out.m_ttfb = 5;
    out.m_ttlb = 2000;
    out.m_dnsLookupDuration = 2;
    out.m_waitForConnectionPoolTime = 3;

    return out;
 }
}
    
