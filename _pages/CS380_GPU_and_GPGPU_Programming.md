---
layout: tutorial
title:  CS 380 - GPU and GPGPU Programming
tags:
- Course
---
<div style='text-align: center;'>
<h4> Markus Hadwiger, Peter Rautek, Xingdi Zhang</h4>
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

Monday, 10:00 - 11:30, Room 3120, Bldg. 9.<br/>
Thursday, 10:00 - 11:30, Room 3120, Bldg. 9.

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
    <a href="{{ site.url }}/people/zhang"><img src="{{ site.url }}/images/people/zhang.jpg" alt="Rey Ramirez" style="width:66%; border-radius: 50%;"></a>
	<h4>Xingdi Zhang</h4>
  </div>
  
</div>

### Programming assignments

<a href="{{ site.url }}/people/rautek">Peter</a> will give you access.


### Slides (fall 2025)

<table>
<tbody>

<tr>
<td style="width:110px">Sep 1, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_01.pdf"  target="_blank">Lecture 1: Introduction, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 4, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_02.pdf"  target="_blank">Lecture 2: Introduction, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 8, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_03.pdf"  target="_blank">Lecture 3: GPU Architecture, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 11, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_04.pdf"  target="_blank">Lecture 4: GPU Architecture, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 15, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_05.pdf"  target="_blank">Lecture 5: GPU Architecture, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 18, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_06.pdf"  target="_blank">Lecture 6: GPU Architecture, Pt. 4.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 22, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_07.pdf"  target="_blank">Lecture 7: GPU Architecture, Pt. 5.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 25, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_08.pdf"  target="_blank">Lecture 8: GPU Architecture, Pt. 6.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 29, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_09.pdf"  target="_blank">Lecture 9: GPU Architecture, Pt. 7.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 2, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_10.pdf"  target="_blank">Lecture 10: GPU Architecture, Pt. 8.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 6, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_11.pdf"  target="_blank">Lecture 11: GPU Compute APIs, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 9, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_12.pdf"  target="_blank">Lecture 12: GPU Compute APIs, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 13, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_13.pdf"  target="_blank">Lecture 13: GPU Compute APIs, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 16, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_14.pdf"  target="_blank">Lecture 14: CUDA Memories, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 20, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_15.pdf"  target="_blank">Lecture 15: CUDA Memories, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 27, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_16.pdf"  target="_blank">Lecture 16: CUDA Memories, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 28, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_17.pdf"  target="_blank">Lecture 17: GPU Parallel Reduction; Shuffle Instructions, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 10, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_18.pdf"  target="_blank">Lecture 18: Shuffle Instructions, Pt. 2; GPU Parallel Prefix Sum, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 11, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_19.pdf"  target="_blank">Lecture 19: GPU Parallel Prefix Sum, Pt. 2; GPU Texturing, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 13, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_20.pdf"  target="_blank">Lecture 20: GPU Texturing, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 17, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_21.pdf"  target="_blank">Lecture 21: GPU Texturing, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 18, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_22.pdf"  target="_blank">Lecture 22: GPU Texturing, Pt. 4.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 20, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_23.pdf"  target="_blank">Lecture 23: GPU Texturing, Pt. 5.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 24, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_24.pdf"  target="_blank">Lecture 24: GPU Virtual Texturing.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 27, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_25.pdf"  target="_blank">Lecture 25: GPU Virtual Geometry (and more Virtual Texturing).</a></td>
</tr>

<tr>
<td style="width:110px">Dec 4, 2025</td>
<td><a href="/teaching/CS380/CS380_fall2025_lecture_26.pdf"  target="_blank">Lecture 26: Programming Tensor Cores.</a></td>
</tr>

</tbody>
</table>

### Slides (fall 2024)

<table>
<tbody>

<tr>
<td style="width:110px">Aug 26, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_01.pdf"  target="_blank">Lecture 1: Introduction, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Aug 29, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_02.pdf"  target="_blank">Lecture 2: Introduction, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 2, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_03.pdf"  target="_blank">Lecture 3: GPU Architecture, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 5, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_04.pdf"  target="_blank">Lecture 4: GPU Architecture, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 9, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_05.pdf"  target="_blank">Lecture 5: GPU Architecture, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 12, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_06.pdf"  target="_blank">Lecture 6: GPU Architecture, Pt. 4.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 16, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_07.pdf"  target="_blank">Lecture 7: GPU Architecture, Pt. 5.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 17, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_08.pdf"  target="_blank">Lecture 8: GPU Architecture, Pt. 6.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 19, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_09.pdf"  target="_blank">Lecture 9: GPU Architecture, Pt. 7.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 26, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_10.pdf"  target="_blank">Lecture 10: GPU Architecture, Pt. 8.</a></td>
</tr>

<tr>
<td style="width:110px">Sep 30, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_11.pdf"  target="_blank">Lecture 11: GPU Architecture, Pt. 9; GPU Compute APIs, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 1, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_12.pdf"  target="_blank">Lecture 12: GPU Compute APIs, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 3, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_13.pdf"  target="_blank">Lecture 13: GPU Compute APIs, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 7, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_14.pdf"  target="_blank">Lecture 14: GPU Compute APIs, Pt. 4.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 8, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_15.pdf"  target="_blank">Lecture 15: CUDA memories, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 10, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_16.pdf"  target="_blank">Lecture 16: CUDA memories, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 15, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_17_vulkan_tutorial.pdf"  target="_blank">Lecture 17: Vulkan tutorial #1.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 17, 2024</td>
<td>Lecture 18: Quiz #2.</td>
</tr>

<tr>
<td style="width:110px">Oct 21, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_19.pdf"  target="_blank">Lecture 19: CUDA memories, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 22, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_20.pdf"  target="_blank">Lecture 20: CUDA memories, Pt. 4</a></td>
</tr>

<tr>
<td style="width:110px">Oct 24, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_21.pdf"  target="_blank">Lecture 21: GPU Parallel Reduction.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 28, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_22.pdf"  target="_blank">Lecture 22: GPU Parallel Prefix Sum.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 29, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_23.pdf"  target="_blank">Lecture 23: Prefix Sum Bank Conflicts; Tensor Core Programming.</a></td>
</tr>

<tr>
<td style="width:110px">Oct 31, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_24.pdf"  target="_blank">Lecture 24: Graphics Pipelines; GPU Texturing, Pt. 1.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 4, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_25.pdf"  target="_blank">Lecture 25: GPU Texturing, Pt. 2.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 5, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_26.pdf"  target="_blank">Lecture 26: GPU Texturing, Pt. 3.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 7, 2024</td>
<td>Lecture 27: Vulkan tutorial #2.</td>
</tr>

<tr>
<td style="width:110px">Nov 11, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_28.pdf"  target="_blank">Lecture 28: GPU Virtual Texturing.</a></td>
</tr>

<tr>
<td style="width:110px">Nov 14, 2024</td>
<td><a href="/teaching/CS380/CS380_fall2024_lecture_29.pdf"  target="_blank">Lecture 29: GPU Virtual Texturing + Virtual Geometry; Unreal Engine 5.</a></td>
</tr>

</tbody>
</table>



### Resources

<table class="test">
<tbody>

<tr>
<td>
<img src="{{ site.url }}/images/Book_PMPP.jpg" style="width:40%; float:left;">
</td>
<td>
<img src="{{ site.url }}/images/Book_GLSLC.jpg" style="width:40%; float:left;">
</td>
<td>
<img src="{{ site.url }}/images/vpg.jpg" style="width:40%; float:left;">
</td>
<td>
<img src="{{ site.url }}/images/vcb.jpg" style="width:40%; float:left;">
</td>

</tr>

<tr>
<td><a href="https://www-sciencedirect-com.kaust.idm.oclc.org/book/9780323912310/programming-massively-parallel-processors"  target="_blank">Programming massively parallel processors</a></td>
<td><a href="https://www.oreilly.com/library/view/opengl-4-shading/9781789342253/" target="_blank">OpenGL 4 shading language cookbook (needs KAUST sign in)</a></td>
<td><a href="https://learning.oreilly.com/library/view/vulkantm-programming-guide/9780134464701/"  target="_blank">Vulkan Programming Guide(needs KAUST sign in)</a></td>
<td><a href="https://learning.oreilly.com/library/view/vulkantm-programming-guide/9781786468154/"  target="_blank">Vulkan Cookbook (needs KAUST sign in)</a></td>	
</tr>

<tr>
<td>Compute part - CUDA</td>
<td>Graphics part - OpenGL</td>
<td>Graphics part - Vulkan</td>
<td>Graphics part - Vulkan</td>
</tr>

</tbody>
</table>

### Old Slides

<details>
	<summary>Fall 2022</summary>
	<table>
	<tbody>
	
	<tr>
	<td style="width:110px">Aug 28, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_01.pdf"  target="_blank">Lecture 1: Introduction, Pt. 1.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Aug 31, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_02.pdf"  target="_blank">Lecture 2: Introduction, Pt. 2.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 4, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_03.pdf"  target="_blank">Lecture 3: Introduction, Pt. 3.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 7, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_04.pdf"  target="_blank">Lecture 4: GPU Architecture, Pt. 1.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 11, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_05.pdf"  target="_blank">Lecture 5: GPU Architecture, Pt. 2.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 14, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_06.pdf"  target="_blank">Lecture 6: GPU Architecture, Pt. 3.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 18, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_07.pdf"  target="_blank">Lecture 7: GPU Architecture, Pt. 4.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 25, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_08.pdf"  target="_blank">Lecture 8: GPU Architecture, Pt. 5.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Sep 28, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_09.pdf"  target="_blank">Lecture 9: GPU Architecture, Pt. 6.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 2, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_10.pdf"  target="_blank">Lecture 10: GPU Architecture, Pt. 7.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 4, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_11.pdf"  target="_blank">Lecture 11: GPU Architecture, Pt. 8.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 5, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_12.pdf"  target="_blank">Lecture 12: GPU Compute APIs, Pt. 1.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 9, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_13.pdf"  target="_blank">Lecture 13: GPU Compute APIs, Pt. 2.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 12, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_14.pdf"  target="_blank">Lecture 14: GPU Compute APIs, Pt. 3.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 23, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_15.pdf"  target="_blank">Lecture 15: GPU Compute APIs, Pt. 4; GPU Texturing, Pt. 1.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Oct 30, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_16.pdf"  target="_blank">Lecture 16: GPU Texturing, Pt. 2.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 1, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_17.pdf"  target="_blank">Lecture 17: GPU Texturing, Pt. 3.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 2, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_18.pdf"  target="_blank">Lecture 18: GPU Texturing, Pt. 4.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 6, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_19.pdf"  target="_blank">Lecture 19: GPU Texturing, Pt. 5.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 9, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_20.pdf"  target="_blank">Lecture 20: GPU Virtual Texturing, Pt. 2.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 13, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_21.pdf"  target="_blank">Lecture 21: GPU Virtual Geometry (and GPU Virtual Texturing).</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 16, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_22.pdf"  target="_blank">Lecture 22: Stream Computing and GPGPU; CUDA Memory Pt.1.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 20, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_23.pdf"  target="_blank">Lecture 23: CUDA Memory Pt.2: Shared Memory.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 22, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_24.pdf"  target="_blank">Lecture 24: CUDA Memory Pt.3: Shared Memory.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 27, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_25.pdf"  target="_blank">Lecture 25: CUDA Memory Pt.4.</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 29, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_26.pdf"  target="_blank">Lecture 26: GPU Reduction; GPU Prefix Sum (Pt.1).</a></td>
	</tr>
	
	<tr>
	<td style="width:110px">Nov 30, 2022</td>
	<td><a href="/teaching/CS380/CS380_fall2022_lecture_27.pdf"  target="_blank">Lecture 27: GPU Prefix Sum (Pt.2); Tensor Core Programming.</a></td>
	</tr>
	
	</tbody>
	</table>
</details>



<details>
	<summary>Fall 2021</summary>
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

    <tr>
    <td style="width:110px">Nov 24, 2021</td>
    <td><a href="/teaching/CS380/CS380_fall2021_lecture_22.pdf"  target="_blank">Lecture 22: GPU Parallel Reduction.</a></td>
    </tr>

    <tr>
    <td style="width:110px">Nov 29, 2021</td>
    <td><a href="/teaching/CS380/CS380_fall2021_lecture_23.pdf"  target="_blank">Lecture 23: GPU Parallel Prefix Sum / Scan.</a></td>
    </tr>

    <tr>
    <td style="width:110px">Dec 1, 2021</td>
    <td><a href="/teaching/CS380/CS380_fall2021_lecture_24.pdf"  target="_blank">Lecture 24: Scan Bank Conflicts; CUDA Memory, Pt. 4.</a></td>
    </tr>

    <tr>
    <td style="width:110px">Dec 6, 2021</td>
    <td><a href="/teaching/CS380/CS380_fall2021_lecture_25.pdf"  target="_blank">Lecture 25: CUDA Memory, Pt. 5; Shuffle Instructions; Cooperative Groups.</a></td>
    </tr>

    <tr>
    <td style="width:110px">Dec 8, 2021</td>
    <td><a href="/teaching/CS380/CS380_fall2021_lecture_26.pdf"  target="_blank">Lecture 26: Tensor Core Programming.</a></td>
    </tr>

    </tbody>
  </table>
</details>

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
