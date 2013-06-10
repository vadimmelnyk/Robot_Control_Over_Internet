<script src="js/jquery-1.6.4.min.js"></script>
<script src="js/jquery.mobile-1.0.1.min.js"></script>
<script src="js/logic.js"></script>
<div data-role="page" id="wrapper">
<table id="main_table" align="center">
<tr><td>
 <table>
     <tr>
  <td></td>
  <td id="forward" class="button"></td>
  <td></td>
    </tr>
    <tr>
  <td id="left" class="button"></td>
  <td></td>
  <td id="right" class="button"></td>
    </tr>
    <tr>
  <td></td>
  <td id="backward" class="button"></td>
  <td></td>
    </tr>
  </table>
</td>
<td>
<table>
     <tr>
  <td></td>
  <td id="top_s" class="button"></td>
  <td></td>
    </tr>
    <tr>
  <td id="left_s" class="button"></td>
  <td></td>
  <td id="right_s" class="button"></td>
    </tr>
    <tr>
  <td></td>
  <td id="bottom_s" class="button"></td>
  <td></td>
    </tr>
  </table>
</td></tr></table>

<table align="center">
<tr>
<td id="camera_button" class="data_button">Camera</td>
<td id="sensors_button" class="data_button">Sensors Data</td>
</tr>
<td class="data_block">
<div style="display:none" id="camera_data">Camera</div>
</td>
<td class="data_block">
<div style="display:none" id="sensors_data">
<iframe src="http://laptop:8000/Untitled%203.html" width="650" height="400"></iframe>
</td>
</tr></table>
</div>