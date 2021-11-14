'use strict';
let template = `
<details class="order" id="order-777">
    <summary class="order-preview">
        <div class="order-doc">
            <span class="order-number txt">Order №777</span>
            <time class="order-datetime txt" datetime="2021-10-06 14:00">6 november 14:00</time>
        </div>

        <h3 class="order-heading txt">Software</h3>
    </summary>

    <form action="./server/download.php" method="post" class="order-content">
        <input type="hidden" name="filename" value="virus.txt">
        <p class="order-txt txt">Download and install a new version of the company's software.</p>
        <input type="submit" value="Download" class="order-button txt">
    </form>
</details>
`
if (confirm('Attention!\nThe site contains a malicious file!\nIf you do not leave this site, the author is not responsible for the possible consequences of infection!\nContinue anyway?')) {
    document.querySelector('#main').insertAdjacentHTML(template);
}