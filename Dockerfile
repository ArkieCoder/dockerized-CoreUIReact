FROM node

ARG USER_ID=0
ARG GROUP_ID=0

RUN apt-get -y update && apt-get -y install sudo
## Remove the host user's group id from the container if it already exists
RUN grep -v ":${GROUP_ID}:" /etc/group > /tmp/group && cp /tmp/group /etc/group

## Add the host user's group id to the container as the 'code_runner' group
RUN groupadd -g ${GROUP_ID} code_runner

## Remove the host user's user id from the container if it already exists
RUN U=`getent passwd ${USER_ID} | cut -d: -f1` && grep "^$U:" /etc/passwd && userdel -f $U || :

## Add the host user's user id to the container as the 'code_runner' user
RUN useradd code_runner -u ${USER_ID} -g ${GROUP_ID} --home-dir /home/node/app

## Add the code_runner user as a sudoer
RUN usermod -a -G sudo code_runner
RUN echo 'code_runner ALL=(ALL) NOPASSWD:ALL' >> /etc/sudoers

WORKDIR /home/node/app
USER ${USER_ID}:${GROUP_ID}
COPY init_npm .
