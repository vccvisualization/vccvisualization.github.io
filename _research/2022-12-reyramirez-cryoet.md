---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       cryoet

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   GPU Accelerated 3D Tomographic Reconstruction and Visualization from Noisy Electron Microscopy Tilt-Series
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Julio Rey Ramirez
 - Peter Rautek
 - Ciril Bohak
 - Ondrej Strnad
 - Zheyuan Zhang
 - Sai Li
 - Ivan Viola
 - Wolfgang Heidrich

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics

#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE TVCG 2023

#specify publication year
year:       2023

#insert abstract of publication
abstract:   >
   We present a novel framework for 3D tomographic reconstruction and visualization of tomograms from noisy electron microscopy tilt-series. Our technique takes as an input aligned tilt-series from cryogenic electron microscopy and creates denoised 3D tomograms using a proximal jointly-optimized approach that iteratively performs reconstruction and denoising, relieving the users of the need to select appropriate denoising algorithms in the pre-reconstruction or post-reconstruction steps. The whole process is accelerated by exploiting parallelism on modern GPUs, and the results can be visualized immediately after the reconstruction using volume rendering tools incorporated in the framework. We show that our technique can be used with multiple combinations of reconstruction algorithms and regularizers, thanks to the flexibility provided by proximal algorithms. Additionally, the reconstruction framework is open-source and can be easily extended with additional reconstruction and denoising methods. Furthermore, our approach enables visualization of reconstruction error throughout the iterative process within the reconstructed tomogram and on projection planes of the input tilt-series. We evaluate our approach in comparison with state-of-the-art approaches and additionally show how our error visualization can be used for reconstruction evaluation.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2022_reyramirez_cryoet_teaser.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2022_reyramirez_cryoet_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      './publications/2022_reyramirez_cryoet.mp4'

#link to publication pdf (optional)
pdf:        './publications/2022_reyramirez_cryoet.pdf'

#link to appendix pdf (optional)
pdfsupp:    './publications/2022_reyramirez_cryoet_supp.pdf' 

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Ramirez2023EMTiltSeries,<br>
   &nbsp;&nbsp;title = {GPU Accelerated 3D Tomographic Reconstruction and Visualization from Noisy Electron Microscopy Tilt-Series},<br>
   &nbsp;&nbsp;author = {Ramirez, Julio Rey and Rautek, Peter and Bohak, Ciril and Strnad, Ondřej and Zhang, Zheyuan and Li, Sai and Viola, Ivan and Heidrich, Wolfgang},<br>
   &nbsp;&nbsp;journal = {IEEE Transactions on Visualization and Computer Graphics},<br>
   &nbsp;&nbsp;number = {29},<br>
   &nbsp;&nbsp;issue = {to appear},<br>
   &nbsp;&nbsp;pages = {1--15},<br>
   &nbsp;&nbsp;year = {2023},<br>
   &nbsp;&nbsp;doi = {10.1109/TVCG.2022.3230445}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
# - title: HQ Paper + Appendix
#   type:  pdf
#   url:   './publications/2020_rautek_killingsurfaces_with_appendixes_hq.pdf' 
# - title: Slides
#   type:  slides
#   url:   './publications/2020_rautek_killingsurfaces_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---