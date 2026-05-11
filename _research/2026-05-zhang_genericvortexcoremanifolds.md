---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       genericvortexcoremanifolds

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Generic Variational Spacetime Optimization of Vortex Core Manifolds
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Xingdi Zhang
 - Peter Rautek
 - Markus Hadwiger
 
#insert publication venue (displayed on publication page)
venue:      >
   ACM SIGGRAPH 2026 Conference Papers, to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   ACM SIGGRAPH 2026

#specify publication year
year:       2026

#insert abstract of publication
abstract:   >
   The detection of vortex structures in fluid flow is a crucial task in continuum mechanics and flow visualization. However, vortex detection is an extremely challenging task that, despite its importance, is not yet fully solved for 3D unsteady flow fields, due to the complexities introduced by the time-dependence of unsteady flow. We introduce a generic variational framework for the computation of optimal vortex cores in 3D unsteady flow that combines a geometric vortex core model with explicit reference frame optimization. Instead of focusing on a specific vortex detection criterion, we use a generically defined Lagrangian that can incorporate different vortex criteria in a unified way. A key insight of our framework is that the two-manifolds comprising 3D vortex cores in spacetime can be obtained by solving the Euler-Lagrange equations in a single time step with only one independent variable. This is enabled by a Lagrangian that is pre-integrated in time according to the pushforward of the underlying flow. The combination of temporal pre-integration and solving for the optimal two-manifold using only one spatial parameter results in an extremely efficient algorithm.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2026_zhang_genericvortexcoremanifolds.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2026_zhang_genericvortexcoremanifolds_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
video:       'https://www.youtube.com/watch?v=QsAiYPGV2-M'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2026_zhang_genericvortexcoremanifolds.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2026_zhang_genericvortexcoremanifolds_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @inproceedings{Zhang2026GenericVortexCoreManifolds,<br>
   &nbsp;&nbsp;title = {Generic Variational Spacetime Optimization of Vortex Core Manifolds},<br>
   &nbsp;&nbsp;author = {Zhang, Xingdi and Rautek, Peter and Hadwiger, Markus},<br>
   &nbsp;&nbsp;booktitle = {SIGGRAPH 2026 Conference Papers},<br>
   &nbsp;&nbsp;year = {2026},<br>
   &nbsp;&nbsp;articleno = {193},<br>
   &nbsp;&nbsp;numpages = {11}<br>
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
