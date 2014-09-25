import java.net.*;
import java.io.*;

public class SendHTTPRequest {
  public static void main(String[] args) throws Exception {
     URL url = new URL("http://www.google.com");
     HttpURLConnection httpCon = (HttpURLConnection) url.openConnection();
     httpCon.setDoOutput(true);
     httpCon.setRequestMethod("PUT");
     OutputStreamWriter out = new OutputStreamWriter(
      httpCon.getOutputStream());
     out.write("Resource content");
     out.close();
     httpCon.getInputStream();
  }
}
