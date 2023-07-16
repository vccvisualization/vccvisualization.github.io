---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       vortexlens

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Vortex Lens: Interactive Vortex Core Line Extraction using Observed Line Integral Convolution
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Peter Rautek
 - Xingdi Zhang
 - Bernhard Woschizka
 - Thomas Theußl
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.30, No.1 (Proceedings IEEE VIS 2023), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2023

#specify publication year
year:       2024

#insert abstract of publication
abstract:   >
   This paper describes a novel method for detecting and visualizing vortex structures in unsteady 2D fluid flows. The method is based on an interactive local reference frame estimation that minimizes the observed time derivative of the input flow field V(x,t). A locally optimal reference frame W(x,t) assists the user in the identification of physically observable vortex structures in Observed Line Integral Convolution (LIC) visualizations. The observed LIC visualizations are interactively computed and displayed in a user-steered vortex lens region, embedded in the context of a conventional LIC visualization outside the lens. The locally optimal reference frame is then used to detect observed critical points, where V = W, which are used to seed vortex core lines. Each vortex core line is computed as a solution of the ordinary differential equation (ODE) w'(t) = W(w(t),t), with an observed critical point as initial condition (w(t0),t0). During integration, we enforce a strict error bound on the difference between the extracted core line and the integration of a path line of the input vector field, i.e., a solution to the ODE v'(t) = V(v(t),t). We experimentally verify that this error depends on the step size of the core line integration. This ensures that our method extracts Lagrangian vortex core lines that are the simultaneous solution of both ODEs with a numerical error that is controllable by the integration step size. We show the usability of our method in the context of an interactive system using a lens metaphor, and evaluate the results in comparison to state-of-the-art vortex core line extraction methods.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2023_rautek_vortexlens.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2023_rautek_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
#pdf:        './publications/2023_rautek_vortexlens.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2023_rautek_vortexlens_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Rautek2023VortexLens,<br>
   &nbsp;&nbsp;title = {Vortex Lens: Interactive Vortex Core Line Extraction using Observed Line Integral Convolution},<br>
   &nbsp;&nbsp;author = {Rautek, Peter and Zhang, Xingdi and Woschizka, Bernhard and Theu{\ss}l, Thomas and Hadwiger, Markus},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2023)},<br>
   &nbsp;&nbsp;year = {2024},<br>
   &nbsp;&nbsp;volume = {30},<br>
   &nbsp;&nbsp;number = {1},<br>
   &nbsp;&nbsp;pages = {to appear}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: Slides
#   type:  slides
#   url:   './publications/2023_rautek_vortexlens_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/vortexlens'
 
---