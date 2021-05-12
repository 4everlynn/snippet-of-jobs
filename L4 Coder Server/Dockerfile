FROM debian:10

MAINTAINER  Edward Jobs <fatewa.fit@gmail.com>

# the path of the extension installation
ARG         C_USER=${CODER_USER}
ARG         PREFIX=/opt/${C_USER}

WORKDIR     ${PREFIX}

COPY        ./.extends ${PREFIX}/.extends
COPY        ./entry-point.sh ${PREFIX}/entry-point.sh

ENV         LANG=en_US.UTF-8

# change apt-get origin
RUN         sed -i s@/deb.debian.org/@/mirrors.aliyun.com/@g /etc/apt/sources.list
RUN         apt-get clean
RUN         apt-get update \
             && apt-get install -y \
                curl \
                dumb-init \
                zsh \
                htop \
                locales \
                man \
                nano \
                git \
                procps \
                openssh-client \
                sudo \
                vim.tiny \
                lsb-release \
              && rm -rf /var/lib/apt/lists/*

# install all files end with .extend.sh
RUN         cd ${PREFIX}/.extends && ./install.sh
#
#RUN         adduser --gecos '' -u 546543 --disabled-password ${C_USER} && \
#                echo "${C_USER} ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers.d/nopasswd
#
#ENV         USER=${C_USER}
#
#USER        546543

ENTRYPOINT  ["sh", "-c", "./entry-point.sh"]

EXPOSE      8080