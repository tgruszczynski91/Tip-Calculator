<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="sp.css">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <h1>Tip Calculator</h1>
    <div class="descr-1">
      <p>How Much was your bill?</p>
    </div>
    <div class="input-1"><input type="text" placeholder="Bill Amount in £" class="amount"></div>
    <small id="alert-1"></small>
    <div class=descr-2>
      <p>How was your service?</p>
    </div>
    <div class="select">
      <select class="service">
        <option disabled selected value="0">Choose an Option</option>
        <option value="30">Extraordinary! - 30%</option>
        <option value="20">Amazing! - 20%</option>
        <option value="15">Good - 15%</option>
        <option value="10">Ok - 10%</option>
      </select>
    </div>
    <small id="alert-2"></small>
    <div class="descr-3">
      <p>How many people sharing a bill?</p>
    </div>
    <div class="input-2"> <input type="text" placeholder="Number of People" class="numOfPeo"></div>
    <small id="alert-3"></small>
    <button id="btn">Calculate!</button>
    <div class="total">
      <div id="totalTip">
        <span id="tip"></span>
        <p id="each"></p>
      </div>
    </div>
    <script src="tip.js"></script>
</body>
</html>
