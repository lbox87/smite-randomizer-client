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
<p>The following insturctions will show how to access random Gods and access random Item Builds.</p>
<p>The API code can be viewed <a href="https://github.com/lbox87/smite-randomizer-api">here</a>.</p>
<p>The base url to send API requests is https://vast-fjord-13474.herokuapp.com/</p>
<h3>Requesting Gods</h3>
<p>To request a random God, make a POST request the endpoint https://vast-fjord-13474.herokuapp.com/random3. The body of your post must contain the JSON object: 
 <br></br>
{"Assassin": true,
 "Guardian": true,
 "Hunter": true,
 "Mage": true,
 "Warrior": true}
 <br></br>
 In this object you can toggle true or false for each God class in the game to include or exclude them from the randomization pool. At least one God class must remain true to return a god.
</p>
<p>Here is an example using Postman: <div><img src="https://i.imgur.com/hxTBF0W.jpg" width="350"/></div></p>

<h3>Requesting Items</h3>
<p>To request a random full build (1 boot + 5 items) for a God, make a POST request to the endpoint https://vast-fjord-13474.herokuapp.com/items/build. The body of your post must contain a JSON object with the specific God class you would like a random build, with the exception of the God Ratatoskr in which case the object will indicate the specific God's name instead of his class (since he has a unique item only available to him).</p>

<p>Here is an example using Postman: <div><img src="https://i.imgur.com/oIGu6ar.jpg" width="350"/></div> In this example the API will return a build specific to Ratatoskr, but if the submitted body had a different God name, or only indicated the class, then a build for that respective class would be returned instead.</p>

<p>This app was built using Node and React.</p>
