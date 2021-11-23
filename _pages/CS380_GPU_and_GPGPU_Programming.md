---
layout: tutorial
title:  CS 380 - GPU and GPGPU Programming
tags:
- Course
---
<div style='text-align: center;'>
<h4> Markus Hadwiger, Peter Rautek, Amani Ageeli </h4>
</div>

<style>
table.books td {
  background-color: lime;
  margin: 12px 12px 12px 12px;
  padding: 12px 12px 12px 12px;
}

table.books {
  border-collapse: separate;
  border-spacing: 10px;
  *border-collapse: expression('separate', cellSpacing='10px');
}
</style>

![CS 380 GPU and GPGPU Programming]({{ site.url }}/images/CS380_04.jpg)

### Overview

This course covers the architecture and programming of GPUs (Graphics Processing Units). It covers both the traditional use for rendering graphics, as well as the use of GPUs for general purpose computations (GPGPU), or GPU Computing.

### Synopsis

CS 380. GPU and GPGPU Programming (3-0-3) Recommended prerequisites: CS 248, CS 292, CS 282. Architecture and programming of GPUs (Graphics Processing Units). Covers both the traditional use of GPUs for graphics and visualization, as well as their use for general purpose computations (GPGPU). GPU many-core hardware architectures, shading and compute programming languages and APIs, programming vertex, geometry, and fragment shaders, programming with CUDA, Brook, OpenCL, stream computing, approaches to massively parallel computations, memory subsystems and caches, rasterization, texture mapping, linear algebra computations, alternative and future architectures.

### Hours and Location

Monday, 10:15 - 11:45, Room 3128, Bldg. 9.<br/>
Wednesday, 10:15 - 11:45, Room 3128, Bldg. 9.

### Instructor

Prof. Markus Hadwiger

### Contact

<div class="row">
  <div class="column" style='text-align: center;'>
    <a href="{{ site.url }}/people/hadwiger"><img src="{{ site.url }}/images/people/hadwiger.jpg" alt="Hadwiger" style="width:66%; border-radius: 50%;"></a>
	<h4>Markus Hadwiger</h4>
  </div>
  <div class="column" style='text-align: center;'>
    <a href="{{ site.url }}/people/rautek"><img src="{{ site.url }}/images/people/rautek.jpg" alt="Rautek" style="width:66%; border-radius: 50%;"></a>
	<h4>Peter Rautek</h4>
  </div>
  <div class="column" style='text-align: center;'>
    <a href="{{ site.url }}/people/ageeli"><img src="{{ site.url }}/images/people/ageeli.jpg" alt="Ageeli" style="width:66%; border-radius: 50%;"></a>
	<h4>Amani Ageeli</h4>
  </div>
</div>

### Programming assignments

<a href="https://bitbucket.org/rautek/cs380-2021/src/master/" target="_blank">Bitbucket git repository for the programming assignments (Peter needs to give you access).</a>

### Slides (fall 2021)
<table>
<tbody>
<tr>
<td style="width:110px">Aug 30, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_01.pdf"  target="_blank">Lecture 1: Introduction, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 1, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_02.pdf"  target="_blank">Lecture 2: Introduction, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 6, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_03.pdf"  target="_blank">Lecture 3: Introduction, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 8, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_04.pdf"  target="_blank">Lecture 4: GPU Architecture, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 13, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_05.pdf"  target="_blank">Lecture 5: GPU Architecture, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 15, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_06.pdf"  target="_blank">Lecture 6: GPU Architecture, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 20, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_07.pdf"  target="_blank">Lecture 7: GPU Architecture, Pt. 4.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 27, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_08.pdf"  target="_blank">Lecture 8: GPU Architecture, Pt. 5.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 29, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_09.pdf"  target="_blank">Lecture 9: GPU Architecture, Pt. 6.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 4, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_10.pdf"  target="_blank">Lecture 10: GPU Architecture, Pt. 7.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 6, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_11.pdf"  target="_blank">Lecture 11: GPU Compute APIs, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 11, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_12.pdf"  target="_blank">Lecture 12: GPU Compute APIs, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 13, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_13.pdf"  target="_blank">Lecture 13: GPU Compute APIs, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 20, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_14.pdf"  target="_blank">Lecture 14: GPU Texturing, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 25, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_15.pdf"  target="_blank">Lecture 15: GPU Texturing, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 1, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_16.pdf"  target="_blank">Lecture 16: GPU Texturing, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 3, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_17.pdf"  target="_blank">Lecture 17: GPU Texturing, Pt. 4, Virtual Texturing, Virtual Geometry.</a></td>
</tr>


<tr>
<td style="width:110px">Nov 8, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_18.pdf"  target="_blank">Lecture 18: Stream Computing and GPGPU.</a></td>
</tr>


<tr>
<td style="width:110px">Nov 10, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_19.pdf"  target="_blank">Lecture 19: CUDA Memory, Pt. 1.</a></td>
</tr>


<tr>
<td style="width:110px">Nov 15, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_20.pdf"  target="_blank">Lecture 20: CUDA Memory, Pt. 2.</a></td>
</tr>


<tr>
<td style="width:110px">Nov 22, 2021</td>
<td><a href="/teaching/CS380/CS380_fall2021_lecture_21.pdf"  target="_blank">Lecture 21: CUDA Memory, Pt. 3.</a></td>
</tr>

</tbody>
</table>

### Resources

<table class="test">
<tbody>

<tr>
<td>
<img src="{{ site.url }}/images/Book_GLSLC.jpg" style="width:40%; float:left;">
</td>
<td>
<img src="{{ site.url }}/images/Book_PMPP.jpg" style="width:40%; float:left;">
</td>
</tr>

<tr>
<td><a href="https://koral.summon.serialssolutions.com/#!/search?bookMark=eNqNkEFPg0AQhddojG3lP5BejAeSXQbY3aM2tZqQ9GK8kmEZoIJQWdC_71bioTcPk5mXfHnz8pbMw2msqRsPBkcqLpinpRJShSKRHOQlW_6JUFyzhUokCAkSbphn7TvnXAjQGqIFW--P1O1SP_JtjcWhq_wWu2rCinzT903u5pZdjcNE3rxW7O1p-7p5DtL97mXzkAYYx1rEAZqYS0gMAhjiJLWKpVBSi7DA0J3ERYIQF0hFCahKrkUuw5IXpHMnNazYejZucLJjBgn_wMFkZ3kddD9DaBv6tnXfjjb7aumU02ZnJTj2bmaPQ_85kfP8xYyrbcA22z5uRBSd-P-9_gHFkWcc"  target="_blank">OpenGL 4 shading language cookbook</a></td>
<td><a href="https://koral.summon.serialssolutions.com/#!/search?bookMark=eNoljstqwzAQRQXtIk3qf_Cq0IXBelgaL0voCwLpol2H0UROXMtR0Dil_fsacs_i7A53KQq8TMdwmnrCKexvxLKWysimbZVeiIL5u54HUlrQd-LxI6dDxnHsT4dyROb-J8S_8owZYwyxPOdEgTllvhe3U76E4qqV-Hp5_ly_VZvt6_v6aVOR0spV2Pi6NcEDQZAdKQIM4CyR7fYGfeslaItmhloXbAfGSfKAFgDJYKNX4uHa5aGPkVM37XxKAyvz63Z-4Pl6I2ut9T-nY0QX"  target="_blank">
Programming massively parallel processors</a></td>
</tr>

<tr>
<td>For the Graphics part</td>
<td>For the GPGPU part</td>
</tr>


</tbody>
</table>

### Old Slides

<details>
	<summary>Fall 2020</summary>
	<table>
    <tbody>
      <tr>
      <td style="width:110px">Aug 31, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_01.pdf"  target="_blank">Lecture 1: Introduction, Pt. 1.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 2, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_02.pdf"  target="_blank">Lecture 2: Introduction, Pt. 2.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 7, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_03.pdf"  target="_blank">Lecture 3: GPU Architecture 1.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 9, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_04.pdf"  target="_blank">Lecture 4: GPU Architecture 2.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 14, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_05.pdf"  target="_blank">Lecture 5: GPU Architecture 3.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 16, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_06.pdf"  target="_blank">Lecture 6: GPU Architecture 4.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 21, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_07.pdf"  target="_blank">Lecture 7: GPU Architecture 5.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Sep 28, 2020</td>
      <td>Lecture 8: Quiz #1</td>
      </tr>

      <tr>
      <td style="width:110px">Sep 30, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_09.pdf"  target="_blank">Lecture 9: GPU Architecture 6.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 5, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_10.pdf"  target="_blank">Lecture 10: GPU Architecture 7.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 7, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_11.pdf"  target="_blank">Lecture 11: GPU Architecture 8.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 12, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_12.pdf"  target="_blank">Lecture 12: GPU Compute APIs 1.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 14, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_13.pdf"  target="_blank">Lecture 13: GPU Compute APIs 2.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 21, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_14.pdf"  target="_blank">Lecture 14: GPU Compute APIs 3, GPU Texturing 1.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 26, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_15.pdf"  target="_blank">Lecture 15: GPU Texturing 2.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Oct 28, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_16.pdf"  target="_blank">Lecture 16: GPU Texturing 3.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 2, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_17.pdf"  target="_blank">Lecture 17: GPU Texturing 4.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 4, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_18.pdf"  target="_blank">Lecture 18: GPU Texturing 5.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 9, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_19.pdf"  target="_blank">Lecture 19: GPU Texturing 6; Stream Computing and GPGPU.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 11, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_20.pdf"  target="_blank">Lecture 20: CUDA Memory: Shared Memory.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 16, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_21.pdf"  target="_blank">Lecture 21: CUDA Memory, Pt.2; GPU Reduction.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 18, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_22.pdf"  target="_blank">Lecture 22: CUDA Memory, Pt. 3.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 23, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_23.pdf"  target="_blank">Lecture 23: CUDA Memory, Pt. 4.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Nov 25, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_24.pdf"  target="_blank">Lecture 24: GPU Parallel Prefix Sum / Scan.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Dec 2, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_25.pdf"  target="_blank">Lecture 25: Parallel Scan Bank Conflicts; Shuffle Instructions.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Dec 7, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_26.pdf"  target="_blank">Lecture 26: Warp Synchronous Programming; Cooperative Thread Groups; Programming Tensor Cores.</a></td>
      </tr>

      <tr>
      <td style="width:110px">Dec 9, 2020</td>
      <td><a href="/teaching/CS380/CS380_fall2020_lecture_27.pdf"  target="_blank">Lecture 27: CUDA Unified Memory; More on Instruction Level Parallelism.</a></td>
      </tr>
    </tbody>
  </table>
</details>
