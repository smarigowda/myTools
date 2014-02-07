from ubuntu
RUN apt-get update
RUN apt-get install wget -y
RUN apt-get install python-pip -y
RUN apt-get update -y
RUN apt-get install build-essential -y
RUN apt-get install git -y
RUN apt-get update -y
