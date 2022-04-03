---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       dxr

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   DXR: A Toolkit for Building Immersive Data Visualizations

#include in selected publications on front page (optional, delete line if not applicable)
#display: selected

#list all publication authors in correct order
authors:
 - Ronell Sicat
 - Jiabao Li
 - JunYoung Choi
 - Maxime Cordeil
 - Won-ki Jeong
 - Benjamin Bach
 - Hanspeter Pfister
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.25, No.1 (Proceedings IEEE Information Visualization 2018), pp. 715-725
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Information Visualization 2018

#specify publication year
year:       2019

#insert abstract of publication
abstract:   >
   This paper presents DXR, a toolkit for building immersive data visualizations based on the Unity development platform. Over the past years, immersive data visualizations in augmented and virtual reality (AR, VR) have been emerging as a promising medium for data sense-making beyond the desktop. However, creating immersive visualizations remains challenging, and often require complex low-level programming and tedious manual encoding of data attributes to geometric and visual properties. These can hinder the iterative idea-to-prototype process, especially for developers without experience in 3D graphics, AR, and VR programming. With DXR, developers can efficiently specify visualization designs using a concise declarative visualization grammar inspired by Vega-Lite. DXR further provides a GUI for easy and quick edits and previews of visualization designs in-situ, i.e., while immersed in the virtual world. DXR also provides reusable templates and customizable graphical marks, enabling unique and engaging visualizations. We demonstrate the flexibility of DXR through several examples spanning a wide range of applications.
 
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2019_sicat_dxr.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2019_sicat_dxr_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:      'https://www.youtube.com/watch?v=NalVXf7Snhw'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://vimeo.com/237673207'

#link to publication pdf (optional)
pdf:        './publications/2019_sicat_dxr.pdf'


#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Sicat2019dxr,<br>
   &nbsp;&nbsp;title = {DXR: A Toolkit for Building Immersive Data Visualizations},<br>
   &nbsp;&nbsp;author = {Ronell Sicat and Jiabao Li and JunYoung Choi and Maxime Cordeil and Won-ki Jeong and Benjamin Bach and Hanspeter Pfister},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE Information Visualization 2018)},<br>
   &nbsp;&nbsp;year = {2019},<br>
   &nbsp;&nbsp;volume = {25},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {715-725}<br>
  }
  
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
 - title: Code
   type:  github
   url:   'https://github.com/ronellsicat/DxR'
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 
   
#don't forget the leading and trailing --- in a YAML file
---