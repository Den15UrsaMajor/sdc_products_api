case $1 in

postgres)
  scp -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem ./init.sh 	ec2-user@ec2-18-117-11-177.us-east-2.compute.amazonaws.com:~/init.sh
  ssh -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem 	ec2-user@ec2-18-117-11-177.us-east-2.compute.amazonaws.com
  ;;
csv)
  scp -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem /Users/michael/Desktop/HR School Stuff/SDC 	ec2-user@ec2-18-117-11-177.us-east-2.compute.amazonaws.com:data
  ssh -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem 	ec2-user@ec2-18-117-11-177.us-east-2.compute.amazonaws.com
  ;;

node)
  scp -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem ./init.sh 	ec2-user@ec2-3-144-116-43.us-east-2.compute.amazonaws.com:~/init.sh
  ssh -i /Users/michael/Desktop/HR/SDC/sdcfirstinst.pem 	ec2-user@ec2-3-144-116-43.us-east-2.compute.amazonaws.com
  ;;
esac


  # file path to key goes after -i

# second block is file path to csv files on local, can create path to folder, and then *.csv

# at end, it'll be : file where you want to put the data. can make a file on ec2 called 'data' to load this in
