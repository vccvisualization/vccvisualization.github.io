---
# this file is written in YAML http://docs.ansible.com/ansible/latest/YAMLSyntax.html
# all lines with a leading sharp are comments and will not be compiled
# longer blocks of text should start with a a leading > to escape all special characters

# URL handle for generated webpage
slug:      jittree

#specifies layout to be used for page generation (do not modify)
layout:     publication

#publication title
title:      >
   JiTTree: A Just-in-Time Compiled Sparse GPU Volume Data Structure

#include in selected publications on front page (optional, delete line if not applicable)
display: selected

#list all publication authors in correct order
authors:
 - Matthias Labschütz
 - Stefan Bruckner
 - Eduard Gröller
 - Markus Hadwiger 
 - Peter Rautek

#insert publication venue (displayed on publication page)
venue:      >
   IEEE Transactions on Visualization and Computer Graphics, Vol.22, No.1 (Proceedings IEEE Scientific Visualization 2015), pp. 1025-1034
   
#insert short venue (displayed in box in publication list)
shortvenue: >
   IEEE Scientific Visualization 2015

#specify publication year
year:       2016

#insert abstract of publication
abstract:   >
   Sparse volume data structures enable the efficient representation of large but sparse volumes in GPU memory for computation and visualization. However, the choice of a specific data structure for a given data set depends on several factors, such as the memory budget, the sparsity of the data, and data access patterns. In general, there is no single optimal sparse data structure, but a set of several candidates with individual strengths and drawbacks. One solution to this problem are hybrid data structures which locally adapt themselves to the sparsity. However, they typically suffer from increased traversal overhead which limits their utility in many applications. This paper presents JiTTree, a novel sparse hybrid volume data structure that uses just-in-time compilation to overcome these problems. By combining multiple sparse data structures and reducing traversal overhead we leverage their individual advantages. We demonstrate that hybrid data structures adapt well to a large range of data sets. They are especially superior to other sparse data structures for data sets that locally vary in sparsity. Possible optimization criteria are memory, performance and a combination thereof. Through just-in-time (JIT) compilation, JiTTree reduces the traversal overhead of the resulting optimal data structure. As a result, our hybrid volume data structure enables efficient computations on the GPU, while being superior in terms of memory usage when compared to non-hybrid data structures.
   
#link to hi-res teaser image of publication (please make sure the image is wide, e.g. aspect ratio between 4:2 and 4:1) 
teaser:     './publications/2016_labschuetz_jittree.jpg'

#link to smaller thumbnail image of publication (please make sure the aspect ratio is 3:2, suggested size is 150x100px)
thumbnail:  './publications/2016_labschuetz_thumbnail.png'

#link to publication video (optional): you can either upload the video to our website (insert local link) or host it on youtube or vimeo (in this case insert the youtube/vimeo link)
#video:      'https://www.youtube.com/watch?v=xxxxxx'

#link to publication pdf (optional)
pdf:        './publications/2016_labschuetz_jittree.pdf'

#insert citation. please format citation by inserting <br> at line breaks, &emsp; will insert a tab character to prettify the citation
citation:   >
  @article{Labschuetz2016Jittree,<br>
   &emsp;author = {Labsch{\"u}tz, Matthias and Bruckner, Stefan and Gr{\"o}ller, M. Eduard and Hadwiger, Markus and Rautek, Peter},<br>
   &emsp;journal = {IEEE Transactions on Visualization and Computer Graphics},<br>
   &emsp;title = {JiTTree: A Just-in-Time Compiled Sparse GPU Volume Data Structure},<br>
   &emsp;year = {2016},<br>
   &emsp;volume = {22},<br>
   &emsp;number = {1},<br>
   &emsp;pages = {1025-1034}<br>
  }

#insert links to additional material for the publication (optional)
#links need a title, a URL and a type (this defines the link icon) which can be one of the following values: code, archive, files, slides or text (this is the default icon)
#links: 
# - title: ExampleCode
#   type:  code
#   url:   './publications/supplementary1.zip' 
# - title: ExampleSlides
#   type:  slides
#   url:   './publications/presentation.pptx' 

#don't forget the leading and trailing --- in a YAML file
---