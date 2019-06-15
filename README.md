<h1>SMITE God Randomizer</h1>
<p> Access the live app <a href="https://sheltered-dawn-38630.herokuapp.com/">here</a></p>

<h2>What does it do?</h2>
<p>SMITE God Randomizer is a companion app to HiRez's video game "SMITE" that allows you to randomize any God from the game's roster. Once a God is randomed, you can also randomize the God's item build.</p>
<div><img src="https://i.imgur.com/QoVFGOp.jpg" width="270"/></div>

<p>If you create a profile, you will be able to save and revisit your favorite builds!</p>
<div><img src="https://i.imgur.com/lT1X3wG.jpg" width="270"/></div>

<p>When viewing your saved builds, you will be able to edit individual items in the build, or delete it from your list.</p>
<div><img src="https://i.imgur.com/TGATctI.jpg" width="270"/></div>

<h2>API Documentation for the SMITE God Randomizer API</h2> 
<p>The API backing this app is used to login into profiles, access Gods, access Items, and access Saved Builds.</p>
<p>The base url to send API requests is https://vast-fjord-13474.herokuapp.com/</p>
<h3>Requesting Gods</h3>
<p>To request a random God, make a POST request the endpoint https://vast-fjord-13474.herokuapp.com/random3. The body of your post contain the JSON object: 
 <br></br>
{"Assassin": true,
 "Guardian": true,
 "Hunter": true,
 "Mage": true,
 "Warrior": true}
 <br></br>
 In this object you can toggle true or false for each God class in the game to include or exclude them from the randomization pool. At least one God class must remain true to return a god.
</p>
<h3>Requesting Items</h3>


<p>This app was built using Node and React.</p>
