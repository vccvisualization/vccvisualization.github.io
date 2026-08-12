---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       vortexcentricvis

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Rotation-Minimizing Space Deformations for the Analysis of Lagrangian Vortex Corelines
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Julio Rey Ramirez
 - Xingdi Zhang
 - Markus Hadwiger
 - Peter Rautek
 
#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.33, No.1 (Proceedings IEEE VIS 2026), to appear
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE VIS 2026

#specify publication year
year:       2027

#insert abstract of publication
abstract:   >
   Visualizing and verifying unsteady 3D vortex structures remains a fundamental challenge in flow visualization. While recent advancements enable the extraction of objective Lagrangian vortex corelines, visually verifying whether these candidate curves accurately represent the true center of swirling motion remains difficult. Standard visualization techniques, such as instantaneous streamlines, lack Galilean invariance and are highly dependent on the chosen frame of reference, often yielding misleading depictions. Conversely, while Lagrangian pathlines offer a physical ground truth, the local rotational component of particle motion is typically occluded by the convective motion of the flow. To address this, we propose a novel visualization technique that associates objective space-time pathlines with evolving Lagrangian corelines. Our method applies a space deformation induced by the deformation of the coreline that guarantees that no rotation component around the core’s tangent is introduced. By applying this deformation to the tubular neighborhood of the coreline, we transform pathlines into the vortex-centric reference frame, effectively decoupling the local swirl of particles from the global drift and deformation. A primary application of this technique is the visual evaluation of vortex coreline candidates. By explicitly visualizing inversely transformed pathlines in context with the coreline curves, we directly reveal the swirling motion of the surrounding particles. Because this swirling motion is the physical ground truth for validating a vortex coreline, our method provides the first pathline-based visual assessment of candidate curves. We demonstrate our approach on multiple unsteady 3D flow datasets and methods for coreline extraction, revealing vortex-relative particle dynamics that are otherwise hidden by bulk transport.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2026_rey_vortexcentricvis.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2026_rey_vortexcentricvis_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:       'https://www.youtube.com/watch?v=ZY3XUtt__oM'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=qiLjCvrpdZU'

#link to publication pdf (optional)
pdf:        './publications/2026_rey_vortexcentricvis.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2026_rey_vortexcentricvis_supp.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Rey2026RotationMinimizingSpaceDeformations,<br>
   &nbsp;&nbsp;title = {Rotation-Minimizing Space Deformations for the Analysis of Lagrangian Vortex Corelines},<br>
   &nbsp;&nbsp;author = {Rey Ramirez, Julio and Zhang, Xingdi and Hadwiger, Markus and Rautek, Peter},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics (Proceedings IEEE VIS 2026)},<br>
   &nbsp;&nbsp;year = {2027},<br>
   &nbsp;&nbsp;volume = {33},<br>
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
