---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       killingobservers

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Time-Dependent Flow seen through Approximate Observer Killing Fields
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Markus Hadwiger
 - Matej Mlejnek
 - Thomas Theußl
 - Peter Rautek
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.25, No.1 (Proceedings IEEE Scientific Visualization 2018), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2018

#specify publication year
year:       2019

#insert abstract of publication
abstract:   >
   Flow fields are usually visualized relative to a global observer, i.e., a single frame of reference. However, often no global frame can depict all flow features equally well. Likewise, objective criteria for detecting features such as vortices often use either a global reference frame, or compute a separate frame for each point in space and time. We propose the first general framework that enables choosing a smooth trade-off between these two extremes. Using global optimization to minimize specific differential geometric properties, we compute a time-dependent observer velocity field that describes the motion of a continuous field of observers adapted to the input flow. This requires developing the novel notion of an observed time derivative. While individual observers are restricted to rigid motions, overall we compute an approximate Killing field, corresponding to almost-rigid motion. This enables continuous transitions between different observers. Instead of focusing only on flow features, we furthermore develop a novel general notion of visualizing how all observers jointly perceive the input field. This in fact requires introducing the concept of an observation time, with respect to which a visualization is computed. We develop the corresponding notions of observed stream, path, streak, and time lines. For efficiency, these characteristic curves can be computed using standard approaches, by first transforming the input field accordingly. Finally, we prove that the input flow perceived by the observer field is objective. This makes derived flow features, such as vortices, objective as well.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2018_hadwiger_killingobservers.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2018_hadwiger_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      './publications/2018_hadwiger_killingobservers.mp4'

#link to publication pdf (optional)
pdf:        './publications/2018_hadwiger_killingobservers.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Hadwiger2019ObserverKillingFields,<br>
   &nbsp;&nbsp;title = {Time-Dependent Flow seen through Approximate Observer Killing Fields},<br>
   &nbsp;&nbsp;author = {Hadwiger, Markus and Mlejnek, Matej and Theu{\ss}l, Thomas and Rautek, Peter},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Scientific Visualization 2018)},<br>
   &nbsp;&nbsp;year = {2019}<br>
   &nbsp;&nbsp;volume = {25},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: Appendixes
   type:  pdf
   url:   './publications/2018_hadwiger_killingobservers_appendixes.pdf' 
 - title: Repository
   type:  github
   url:   'https://github.com/vccvisualization/killingobservers'

 
---