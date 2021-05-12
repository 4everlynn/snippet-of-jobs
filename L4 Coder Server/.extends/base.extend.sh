sudo sed -i "s/# en_US.UTF-8/en_US.UTF-8/" /etc/locale.gen \
&& locale-gen

curl -fsSL https://code-server.dev/install.sh | sh