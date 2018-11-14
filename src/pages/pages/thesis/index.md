---
title: "Multi-perspective Process Mining"
layout: page
path: "/thesis"
---

I defended my PhD thesis [**Multi-perspective Process Mining**](https://research.tue.nl/en/publications/multi-perspective-process-mining) on the 7th February 2018. 
The thesis provides in-depth information on several Process Mining techniques that deal with situations in which multiple process perspectives (control-flow, data, resource, time, etc.) are intertwined and considered together. 

![PhD thesis -- Multi-perspective Process Mining](./mannhardt-cover-front.png)  

## Extended Abstract

If you just want to get an overview, an [extended abstract](http://ceur-ws.org/Vol-2196/BPM_2018_paper_9.pdf) summarizing it is published in the [BPM Dissertation Award proceedings](http://ceur-ws.org/Vol-2196/), for which I was nominated. This year it was highly competitive and difficult to compete with excellent work such as the winning [Inductive Miner thesis](http://ceur-ws.org/Vol-2196/BPM_2018_paper_10.pdf) by Sander Leemans.

## Technical Content

Of course, I am biased, but I think that despite its length (*425 pages*) it serves as nice introduction to **Multi-perspective Conformance Checking** (Chapter 4 and 5). Of course there are much more topics covered, such as Chapter 8 on **Data-aware Heuristics Process Discovery** in which the well-known *Heuristics Miner* algorithm is extended with an approach to detect data-dependent behavior and Chapter 9 on *Guided Process Discovery* in which existing process discovery methods can be improved by using multi-perspective activity patterns to raise the abstraction level of the event log. The thesis chapters are fairly independent from each other.

## Tools

I like to actually realize my ideas as working software. I take pride in going the extra mile to make software that is actually usable and can be built upon by other people. 

### Multi-perspective Process Explorer (MPE)

TODO

### Interactive Data-aware Heuristic Miner (iDHM)

TODO

### XESLite

TODO

## Case Studies

As part of my PhD I applied my technique to real processes. Four of those applications are described in the thesis showing that the application of methods is *feasible* and provides *valuable insights*. In three cases I managed to publish the underlying anonymized event data contributing to the growing set of realistic data available at the [IEEE Task Force on Process Mining repository](https://data.4tu.nl/repository/collection:event_logs). 

Many others have built their work upon these logs since then: 17 citations for the road traffic fine management log and 10 citations for the sepsis log so far with a high number of cases in which the data was not properly cited. You are welcome and please start citing [data properly](http://datacite.org/whycitedata)!

### Road traffic fine management

TODO

### Sepsis cases

TODO

### Digital whiteboard

TODO

### Hospital billing

TODO