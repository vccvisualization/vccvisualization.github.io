---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:       light-calibration

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   A Practical and Efficient Model for Intensity Calibration of Multi-Light Image Collections

#include in selected publications on front page (optional, delete line if not applicable)
display:	selected

#list all publication authors in correct order (please check the spelling is identical to your personal page)
authors:
 - Ruggero Pintus
 - Alberto Jaspe-Villanueva
 - Antonio Zorcolo
 - Markus Hadwiger
 - Enrico Gobbetti

#insert publication venue (displayed on publication page)
venue:      >
   The Visual Computer (Selected paper from CGI 2021), to appear

#insert short venue (displayed in box in publication list)
shortvenue: >
   The Visual Computer <span style="color:rgb(180,0,0);">(CGI 2021 Best Paper Award)</span>

#specify publication year
year:       2021

#insert abstract of publication
abstract:   >
   We present a novel practical and efficient mathematical formulation for light intensity calibration of Multi Light Image Collections (MLICs). Inspired by existing and orthogonal calibration methods, we design a hybrid solution that leverages their strengths while overcoming most of their weaknesses. We combine the rationale of approaches based on fixed analytical models with the interpolation scheme of image domain methods. This allows us to minimize the final residual error in light intensity estimation, without imposing an overly constraining illuminant type. Unlike previous approaches, the proposed calibration strategy proved to be simpler, more efficient and versatile, and extremely adaptable in different setup scenarios. We conduct an extensive analysis and validation of our new light model compared to several state-of-the-art techniques, and we show how the proposed solution provides a more reliable outcomes in terms of accuracy and precision, and a more stable calibration across different light positions/orientations, and with a more general light form factor.

#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1)
teaser:     './publications/2021_pintus_light_calibration.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2021_pintus_light_calibration_thumbnail.jpg'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://vimeo.com/'

#link to talk video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#talk:       'https://www.youtube.com/watch?'

#link to publication pdf (optional)
pdf:        './publications/2021_pintus_light_calibration.pdf'

#link to appendix pdf (optional)
#pdfsupp:    './publications/2021_gonda_vice_appendixes.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &nbsp;&nbsp; will insert a tab character to prettify the citation
citation:   >
   @Article{ Pintus:2021:PEM,<br>
   &nbsp;&nbsp;author = {Ruggero Pintus and Alberto {Jaspe Villanueva} and Antonio Zorcolo and Markus Hadwiger and Enrico Gobbetti},<br>
   &nbsp;&nbsp;title = {A Practical and Efficient Model for Intensity Calibration of Multi-Light Image Collections},<br>
   &nbsp;&nbsp;journal = {The Visual Computer},<br>
   &nbsp;&nbsp;year = {2021},<br>
   &nbsp;&nbsp;abstract = { We present a novel practical and efficient mathematical formulation for light intensity calibration of Multi Light Image Collections (MLICs). Inspired by existing and orthogonal calibration methods, we design a hybrid solution that leverages their strengths while overcoming most of their weaknesses. We combine the rationale of approaches based on fixed analytical models with the interpolation scheme of image domain methods. This allows us to minimize the final residual error in light intensity estimation, without imposing an overly constraining illuminant type. Unlike previous approaches, the proposed calibration strategy proved to be simpler, more efficient and versatile, and extremely adaptable in different setup scenarios. We conduct an extensive analysis and validation of our new light model compared to several state-of-the-art techniques, and we show how the proposed solution provides a more reliable outcomes in terms of accuracy and precision, and a more stable calibration across different light positions/orientations, and with a more general light form factor. },<br>
   &nbsp;&nbsp;doi = {10.1007/s00371-021-02172-9},<br>
   &nbsp;&nbsp;note = {To appear},<br>
   }
#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
links:
# - title: Slides
#   type:  slides
#   url:   './publications/2021_herter_slides.pdf'
# - title: Code
#   type:  github
#   url:   'https://github.com/vccvisualization/thinvolvis'
 - title: Publisher version
   type: web
   url: 'https://link.springer.com/epdf/10.1007/s00371-021-02172-9?sharing_token=VMXs2DVVm7IVVF4amfrREPe4RwlQNchNByi7wbcMAY4Jfgey9N98UEe6LWWca6nHi4R2T50HM9_apAu1FLDMW4-xtnrwMYiK7IECkEHKW_Nhr5d-Co1mcZ0B8Bhwy36agb2wB_GjdFYsHIDw617bttScLrC8tO-YIUVxWstmIWviGftJtMPFJZeI0AqDg4LT'
---