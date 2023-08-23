---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       digitalsequences

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   Analysis and Synthesis of Digital Dyadic Sequences
   
#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Abdalla G. M. Ahmed
 - Markus Hadwiger
 - Mikhail Skopenkov
 - Peter Wonka
 
#insert publication venue (displayed on publication page)
venue:      >
   arXiv:2306.06925

#insert short venue (displayed in box in publication list)
shortvenue: >
   arXiv

#specify publication year
year:       2023

#insert abstract of publication
abstract:   >
   We explore the space of matrix-generated (0, m, 2)-nets and (0, 2)-sequences in base 2, also known as digital dyadic nets and sequences. We provide a complete characterization of the design space and count the possible number of constructions with and without considering possible reorderings of the point set. Based on this analysis, we then show that every digital dyadic net can be reordered into a sequence, together with a corresponding algorithm. Finally, we present a novel family of self-similar digital dyadic sequences, to be named xi-sequences, that spans a subspace with fewer degrees of freedom. Those xi-sequences are extremely efficient to sample and compute, and we demonstrate their advantages over the classic Sobol (0, 2)-sequence.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2023_ahmed_digitalsequences.png'
   
#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2023_ahmed_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/458350874'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?v=3WW2Bdg5tY8'

#link to publication pdf (optional)
#pdf:        './publications/2023_ahmed_digitalsequences.pdf'

#link to appendix pdf (optional)
#pdfsupp:   'https://arxiv.org/pdf/2306.06925.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
  @article{Ahmed2023DigitalDyadicSequences,<br>
   &nbsp;&nbsp;title = {Analysis and Synthesis of Digital Dyadic Sequences},<br>
   &nbsp;&nbsp;author = {Ahmed, Abdalla G. M. and Hadwiger, Markus and Skopenkov, Mikhail and Wonka, Peter},<br>
   &nbsp;&nbsp;journal = {arXiv e-prints},<br>
   &nbsp;&nbsp;archivePrefix = "arXiv",<br>
   &nbsp;&nbsp;eprint = {2306.06925},<br>
   &nbsp;&nbsp;year = {2023}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links: 
#- title: Publisher version
#  type:  web
#  url:   'https://doi.org/10.1063/5.0063817'
- title: arXiv paper
  type:  pdf
  url:   'https://arxiv.org/pdf/2306.06925.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/killingsurfaces'
 
---