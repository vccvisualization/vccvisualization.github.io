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

Sunday, 14:30 - 16:00, Room 3128, Bldg. 9.<br/>
Wednesday, 14:30 - 16:00, Room 3128, Bldg. 9.

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

<a href="https://bitbucket.org/rautek/cs380-2022/src/main/" target="_blank">Bitbucket git repository for the programming assignments (Peter needs to give you access via your KAUST email address).</a>

### Slides (fall 2022)

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
<td><a href="https://koral.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwfV07T8MwED4BXZAYQICAAorY2zi2yUOqQFBRCqpYykBZKscPIbV0CGXlt3Nn8igdOudyiZWLv8_nu88AgndZZ21OsI5p53LFpIm0MFypSFvDuUssBoihfufxPX97EZNnKtWxVWtMfU7BjFRwfP7ia10w0duVeYQunWc5n9fbrV4UgnLs4Q9pyUYJwrPEEBbhrSq2canG8Gdu3T1N3odVFCLDiLOVvTkhcE5IGxDHNV2c8YbUCHmNHhvFGUQEjrhd3y_RX4LEhrrKqsfzUmyqfh2kxn6EK9g22IeWpYaHA9iyi0MIe5-qmN1QncnjKJDB-MMX2QejMq8Z9NGWmHkv9IZHcDV4eO0PO97xVMSMxDGm_8YkjmFPUSX9Yuk77swJBE4IkxmeaqWZ1EmWu5QEeHKHuGbTxJ1Ce4PHs41X27CLhCP9q9E6h51l8W0vcOgkRnBZfodfjG2caw"  target="_blank">OpenGL 4 shading language cookbook</a></td>
<td><a href="https://koral.summon.serialssolutions.com/2.0.0/link/0/eLvHCXMwfV1NS8NAEB3UXgQPiopalcWTHmr3I80HFMFKUxGUgoJ6qrvJFqEfQhIP_ntnNmvAHnpNNsmy7M687L73BkDJa95ZiQlxosMoF0aZqQlinYRGZFZNDQZHrWRGuuHngXx7Uu8PRNX5-JPGNHUKZuSC4_YvylXDxNKzMX3KqFOBC_L-SpfwKlnJciVVIgjRbOJfGsd13LodjF6bBYCTGeFJoNyprm8qvEtP8yiiWNeZmi_p0lC6Cy1L2oQ92LDLfRj1F7qY3YxrhtUCcxB7RCiM4Wv-w8a6oCopc-aVAF9F2e-69uwyxflTfbJh7uhaVwdwkQ5f7u477oMTFXLyt5j866s6hB1NZPhl5URz-REwbTOpTWTJbDDI8lhHMVU8FMIGSsa8dwztNW88WXu3DduSFABuF-IUtqri257hkJCfwLkfz1_-0ZD9"  target="_blank">
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
