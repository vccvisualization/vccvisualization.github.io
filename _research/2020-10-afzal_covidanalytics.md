---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       covidanalytics

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Visual Analytics Based Decision Making Environment for COVID-19 Modeling and Visualization
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Shehzad Afzal
 - Sohaib Ghani
 - Hank Jenkins-Smith
 - David Ebert
 - Markus Hadwiger
 - Ibrahim Hoteit

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Visualization 2020 Short Papers, pp. 86-90
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Visualization 2020 Short Papers

#specify publication year
year:       2020

#insert abstract of publication
abstract:   >
   Public health officials dealing with pandemics like COVID-19 have to evaluate and prepare response plans. This planning phase requires not only looking into the spatiotemporal dynamics and impact of the pandemic using simulation models, but they also need to plan and ensure the availability of resources under different spread scenarios. To this end, we have developed a visual analytics environment that enables public health officials to model, simulate, and explore the spread of COVID-19 by supplying county-level information such as population, demographics, and hospital beds. This environment facilitates users to explore spatiotemporal model simulation data relevant to COVID-19 through a geospatial map with linked statistical views, apply different decision measures at different points in time, and understand their potential impact. Users can drill-down to county-level details such as the number of sicknesses, deaths, needs for hospitalization, and variations in these statistics over time. We demonstrate the usefulness of this environment through a use case study and also provide feedback from domain experts. We also provide details about future extensions and potential applications of this work.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2020_afzal_covidanalytics.jpg'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2020_afzal_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      './publications/2020_afzal_covidanalytics.mp4'

#link to publication pdf (optional)
pdf:        './publications/2020_afzal_covidanalytics.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @inproceedings{Afzal2020CovidAnalytics,<br>
   &nbsp;&nbsp;title = {A Visual Analytics Based Decision Making Environment for COVID-19 Modeling and Visualization},<br>
   &nbsp;&nbsp;author = {Afzal, Shehzad and Ghani, Sohaib and Jenkins-Smith, Hank and Ebert, David and Hadwiger, Markus and Hoteit, Ibrahim},<br>
   &nbsp;&nbsp;booktitle = {IEEE Visualization 2020 Short Papers},<br>
   &nbsp;&nbsp;year = {2020}<br>
   &nbsp;&nbsp;pages = {86-90}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: ExampleSlides
#  type:  slides
#   url:   './publications/presentation.pptx'
   
 #don't forget the leading and trailing --- in a YAML file
---