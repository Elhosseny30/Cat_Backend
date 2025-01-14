let markdown = `
<div class="div1">
    <h1>Levels</h1>
    <table border="3">
        <tr>
            <td>Level</td>
            <td>Weeks</td>
            <td>Start</td>
        </tr>
        <tbody align="center">
            <tr align="center">
                <td>0</td>
                <td>3</td>
                <td>Jan</td>
            </tr>
            <tr>
                <td>1</td>
                <td>8</td>
                <td>Feb</td>
            </tr>
            <tr>
                <td>2</td>
                <td>10</td>
                <td>Apr</td>
            </tr>
            <tr>
                <td>3</td>
                <td>11</td>
                <td>Jul</td>
            </tr>
        </tbody>
    </table>
</div1>
    <div>
        <h1>Checklist</h1> 
        <ul>
            <li> <b>Level 0</b> <br><br>
                <input type="checkbox" checked name="a"> 
                <label> HTML & CSS</label> <br><br>
                <input type="checkbox" checked name="b">
                <label> Git & GitHub</label> <br><br>
                <input type="checkbox" checked name="c"> 
                <label> Networking</label> <br><br>
            </li>
            <li>
             <b>Level 1</b> <br><br>
             <input type="checkbox" checked>
             <label>JavaScript</label> <br><br>
             <input type="checkbox">
             <label>Express.js</label>
            </li>
        </ul>
    </div>`;

document.write(markdown);