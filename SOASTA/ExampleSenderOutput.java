package org.example;

public class ExampleSenderOutput {
  public String m_operation;
  public String m_url; 
  public String m_completionType;
  public String m_failureText;
  public boolean m_validationPassed;
  public String m_textSent;
  public String m_textReceived;

  public long m_deltaFromScheduledStart; 
  public long m_duration;
  public long m_bytesSent;
  public long m_bytesReceived;
  public long m_totalPortRetryCount;
  public long m_totalPortRetryTime;
  public long m_connectionEstablishTime;
  public long m_sendTime;
  public long m_receiveTime;
  public long m_totalTime;
  public long m_ttfb;
  public long m_ttlb;
  public long m_dnsLookupDuration;
  public long m_waitForConnectionPoolTime;
}
