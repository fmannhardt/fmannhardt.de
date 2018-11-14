---
title: Revealing Infrequent Behavior with the Data-aware Heuristic Miner 
date: "2017-03-09T14:57:00.000Z"
layout: post
draft: false
path: "/posts/revealing-infrequent-behavior-with-the-data-aware-heuristic-miner/"
category: "Paper"
tags:
  - "Paper"
  - "CAiSE Conference"
  - "ProM"
  - "Process Mining"
description: "Our paper Data-driven Process Discovery - Revealing Conditional Infrequent Behavior from Event Logs (preprint) has been accepted for presentation at the CAiSE 2017 conference in Essen."
---

Our paper Data-driven Process Discovery - Revealing Conditional Infrequent Behavior from Event Logs (preprint) has been accepted for presentation at the CAiSE 2017 conference in Essen:

```
Mannhardt et al. (2017).   
Data-Driven Process Discovery - Revealing Conditional Infrequent Behavior from Event Logs. In CAiSE 2017, pp. 545–560.
```

The idea behind this work is that not all infrequently observed process behavior should be disregarded as noise. In fact, often it is the infrequent behavior that provides important, unexpected, insights when analyzing a process. The main process flow just confirms what was already known.

We assume a situation in which showing all infrequent behavior leads to a unreadable, and overly complex process models. Therefore, we consider the problem on how to distinguish potentially interesting infrequent behavior from random noise, which would obstruct the discovered process model. In the paper, we use the Heuristics Miner as a foundation and extend it with the use of classification techniques to differentiate conditional dependencies from unconditional dependencies. We include infrequent conditional dependencies in the discovered process model and hide infrequent unconditional dependencies.

The method and has been implemented in ProM as the Data-aware Heuristic Miner, which provides an interactive tool to discover Causal nets, Petri nets, and BPMN models based on the idea. As part of this work, I also reimplemented the classical (Flexible) Heuristics Miner as an interactive tool. Both plug-ins are available in the package DataAwareCNetMiner and will be part of the next ProM release. Any feedback on the tools is highly appeciated. Features such as animations and visually showing frequencies are yet to be added.

