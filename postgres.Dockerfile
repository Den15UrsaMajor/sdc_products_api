FROM postgres:latest

RUN mkdir /seed/

COPY *.csv /seed/
# COPY data .

RUN chmod a+rx /seed

COPY /database/schema.sql /docker-entrypoint-initdb.d

# file path to key goes after -i

# second block is file path to csv files on local, can create path to folder, and then *.csv

# at end, it'll be : file where you want to put the data. can make a file on ec2 called 'data' to load this in