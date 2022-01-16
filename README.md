

# Intelie Plot Challenge - _Made by_ _Gustavo Arndt_

In this challenge, I had to implemente a web application that plots a line chart based, on some manually input data.

The input data is a sequence of events. The data will be manually input trough on input interface by the final user.
Based on the input sequence of events, a time based line chart containing one or more series is plotted on a interface chart.

                 
<a align='center' href="https://ibb.co/pdMYGQW"><img src="https://i.ibb.co/M7tFWf8/Captura-de-tela-de-2022-01-16-15-52-17.png" alt="Captura-de-tela-de-2022-01-16-15-52-17" border="2" /><br>Gustavo Arndt's challenge screenshot</a>


# Table of Contents

* [How to install](#How-to-install)   
* [How to run](#How-to-run)
* [Technologies](#Technologies)
* [How to play](#How-to-play-#:))



# How to install
   ```bash
#Clone Repository
$ git clone https://github.com/GustavArndt/chart_challenge_intelie.git
```
or
   ```bash
#Download from:
https://github.com/GustavArndt/chart_challenge_intelie
```
and go to: code>download ZIP



# How to run
```bash
# First you need to install the dependencies, in the project folder run:
$ npm install

# Then you can run the application by running:
$ npm start
```
Go to http://localhost:3000/ to see the result.

# Technologies
### This project was made using some of the follow technologies:
####  "ReactJS" as framework
#### " React-Ace" as library to build input interface component
#### " React-Chartjs-2" as library  to build chart interface component
#### " React-split" as library  to build the split panel component.

# How to play :)

## Basics:
In this web application you have one screen splitted in two screens. 

The first screen, on the top, you will find the input interface where you can put your data in order to get your data plotted. (Find below the recommended data format you  should use to have better performance)

<a align='center' href="https://ibb.co/pdMYGQW"><img src="https://i.ibb.co/M7tFWf8/Captura-de-tela-de-2022-01-16-15-52-17.png" alt="Captura-de-tela-de-2022-01-16-15-52-17" border="2" /><br>Input Interface Screen</a>

The second screen,on the bottom, you will find the chart interface where you can visualize your data plotted.(Find below some details about the chart)

<a align='center' href="https://ibb.co/pdMYGQW"><img src="https://i.ibb.co/M7tFWf8/Captura-de-tela-de-2022-01-16-15-52-17.png" alt="Captura-de-tela-de-2022-01-16-15-52-17" border="2" /><br>chart Interface Screen</a>

Ater you input your data just press Generate chart button and  _"Voilà"_ .

## Input interface hints & data rules:
First you need to know about the kind of data we are dealing with:

### start
Events of type *start* define that a new sequence of data events will follow, along with the fields that may be plotted and their grouping. A group is a category for splitting the same variable into different series.
You are able to put as many different groups as you want.

Example:
```
{type: 'start', timestamp: 1519780251293, select: ['min_response_time', 'max_response_time'], group: ['os', 'browser']}
```
In this example, for each different value of the pair (os, browser), we will plot two lines: one that represents the minimum response time, and one that represents the maximum response time. That is: if there are two different values for 'os' and two different values for 'browser', we should have 8 different lines plotted.

### span
Events of type *span* define what is the visible date range for the chart. A new event of this type may update the chart timescale boundaries.

Example:
```
{type: 'span', timestamp: 1519780251293, begin: 1519780251293, end: 1519780260201}
```
In this example the data will be plotted inside the timescale interval between the "begin" and "end" values. All data outside this range will be ignored.

### stop
Events of type *stop* define that no more data events will follow.
A *stop* event is generated after loading a static timespan in the past, or if the user explicitly stops the query. Any events that eventually follow a *stop* event will be ignored, except for a new *start*, which would imply the creation of a new chart.

Example:
```
{type: 'stop', timestamp: 1519780251293}
```

### data
Events of type *data* define the content that might be displayed on the chart.

Example
```
{type: 'data', timestamp: 1519780251000, os: 'linux', browser: 'chrome', min_response_time: 0.1, max_response_time: 1.3}
```
### Pay Attention
 Absent data values for the fields defined by *select* and *group* will generate new series. 
 Fields that are not defined will be ignored.
The fields 'timestamp' and 'type' must be inside all events, otherwise the event will be ignored.
Dont'use 'commas' to split each event, otherwise you will receive 'JSON syntax error'. 



Any issue0 or suggestionss please get in touch by email.
gustavoarndt1988@gmail.com
