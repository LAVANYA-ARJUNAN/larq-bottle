const express=require('express')
const app=express();
const cors = require('cors')
const multer = require('multer');
const port = 4000
const path = require('path')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
app.use(cors())
app.use(express.json())

const JWT_SECRET = 'secret123';

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://lavanyaarjunan:lavu1216@cluster0.otuv2v8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
// Bottle
    const productCollection = client.db("ecommerce").collection("kids")
    const usersCollection = client.db('userdb').collection('user')

    app.post('/product', upload.single('image'), async (req, res) => {
  const { title, ds, price, imageLink } = req.body;

  let image = null;
  if (req.file) {
    image = `/uploads/${req.file.filename}`;
  } else if (imageLink) {
    image = imageLink;
  }

  if (!image || !title || !ds || !price) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  const product = {
    image,
    title,
    ds,
    price,
    quantity: 1,
  };

  const result = await productCollection.insertOne(product);
  res.send(result);
});

    app.get('/allproduct', async(req,res)=>{
      const getKids = productCollection.find()
      const result = await getKids.toArray()
      res.send(result)
    })

    app.get('/oneproduct/:id' , async(req,res)=>{
      const imm=req.params.id
      const filter = {_id: new ObjectId(imm)}
      const result = await productCollection.findOne(filter)
      res.send(result)
    })

    // app.get('/oneproduct/:id' , async(req,res)=>{
    //   const id=req.params.id
    //   const filter = {_id: new ObjectId(id)}
    //   const result = await productCollection.findOne(filter)
    //   res.send(result)
    // })

    app.delete('/onedelete/:id' , async(req,res)=>{
      const id = req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await productCollection.deleteOne(filter)
      res.send(result)
    })

    app.patch('/updateproduct/:id',async(req,res)=>{
      const id = req.params.id
      const update=req.body
      const filter={_id: new ObjectId(id)}
      const updateproduct={$set:{...update}}     
      const option={upsert:true}
      const result=await productCollection.updateOne(filter,updateproduct,option)
      res.send(result)
    })

    // Pitcher
   const bottleCollection=client.db("ecommerce").collection("bottle")

   app.post('/bottle', upload.single('image'), async (req, res) => {
  const { title, ds, price, imageLink } = req.body;

  let image = null;
  if (req.file) {
    image = `/uploads/${req.file.filename}`;
  } else if (imageLink) {
    image = imageLink;
  }

  if (!image || !title || !ds || !price) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  const product = {
    image,
    title,
    ds,
    price,
    quantity: 1,
  };

    const result=await bottleCollection.insertOne(product)
    res.send(result)
   })
   
  
   app.get('/pitcher',async(req,res)=>{
    const getPitcher=bottleCollection.find()
    const result= await getPitcher.toArray()
    res.send(result)
   })
   app.get('/onepitcher/:id' , async(req,res)=>{
      const pit=req.params.id
      const filter = {_id: new ObjectId(pit)}
      const result = await bottleCollection.findOne(filter)
      res.send(result)
    })
     app.delete('/onepitcher/:id' , async(req,res)=>{
      const id=req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await bottleCollection.deleteOne(filter)
      res.send(result)
    })
    app.patch('/updatepitcher/:id',async(req,res)=>{
      const id=req.params.id
      const update=req.body
      const filter={_id: new ObjectId(id)}
      const updateproduct={$set:{...update}}     
      const option={upsert:true}
      const result=await bottleCollection.updateOne(filter,updateproduct,option)
      res.send(result)
    })
 // Shop
    const shopProduct = client.db("ecommerce").collection("Shop")

   app.post('/shop', upload.single('image'), async (req, res) => {
  const { title, ds, price, imageLink } = req.body;

  let image = null;
  if (req.file) {
    image = `/uploads/${req.file.filename}`;
  } else if (imageLink) {
    image = imageLink;
  }

  if (!image || !title || !ds || !price) {
    return res.status(400).send({ error: 'Missing required fields' });
  }

  const product = {
    image,
    title,
    ds,
    price,
    quantity: 1,
  };

  const result = await shopProduct.insertOne(product);
  res.send(result);
});

    app.get('/shopall',async(req,res)=>{
      const shopAll = shopProduct.find()
      const result = await shopAll.toArray()
      res.send(result)
 })
     app.get('/shopone/:id' , async(req,res)=>{
      const shop=req.params.id
      const filter = {_id: new ObjectId(shop)}
      const result = await shopProduct.findOne(filter)
      res.send(result)
    })

     app.delete('/shopone/:id' , async(req,res)=>{
      const id=req.params.id
      const filter = {_id: new ObjectId(id)}
      const result = await shopProduct.deleteOne(filter)
      res.send(result)
    })

    app.patch('/shopUpdate/:id',async(req,res)=>{
      const id=req.params.id
      const update=req.body
      const filter={_id: new ObjectId(id)}
      const updateproduct={$set:{...update}}     
      const option={upsert:true}
      const result=await shopProduct.updateOne(filter,updateproduct,option)
      res.send(result)
    })
    
//authentication
    app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const existingUser = await usersCollection.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ msg: 'User already exists' });
  }

  const hashedPass = await bcrypt.hash(password, 10);
  await usersCollection.insertOne({ name, email, password: hashedPass });

  res.status(201).json({ msg: 'User registered successfully' });
});


app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await usersCollection.findOne({ email });
  if (!user) return res.status(400).json({ msg: 'User not found' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

   
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`)
})