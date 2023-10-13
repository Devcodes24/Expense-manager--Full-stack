// all the needed things.

var con=require("./connection");
var mysql=require("mysql");
var express=require("express");
var app = express();
var bodyParser=require("body-parser");
app.set("view engine","ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// getting different elements of date to classify.
var datee = new Date();
var datted = datee.getDate();
var dattem = datee.getMonth();
var dattey = datee.getFullYear();

//functions starts..
app.get("/",(req,res)=>{
	res.sendFile((__dirname+"/EnterStudents.html"))
	
})

app.get("/item-anniversary",(req,res)=>{
	
	res.sendFile(__dirname+("/Itemanni.html"))
});

app.post("/",(req,res)=>{
	var snacks=req.body.snacks;
	var item=req.body.item;
	var trip=req.body.trip;
	var datte = datee.getDate();
	//var date=req.body.item;
	
	con.connect((error)=>{
		//var sql2="SELECT * FROM expenditurestudents WHERE itemdate=? AND itemname=?";
		var sql="INSERT INTO expenditurestudents(snacks,trip,item,date,Dates,month,year) VALUES (?,?,?,?,?,?,?)";
		con.query(sql,[snacks,trip,item,datee,datted,dattem,dattey],(error,result)=>{
			res.redirect("/showdata");});	
			
			
		
		
	})
})

app.post("/item-anniversary",(req,res)=>{
	var item_name=req.body.item_name;
	var item_date=req.body.item_date;
	
	con.connect((error)=>{
		var sql="INSERT INTO itemanni(itemname,itemday,itemmonth,itemyear) VALUES (?,?,?,?)";
		con.query(sql,[item_name,datted,dattem,dattey],(error,result)=>{
			res.redirect("/showdata");
			
			});	
		
			
			
		
		
	})
})


app.get("/showdata",(req,res)=>{
	con.connect((error)=>{
		var sql="SELECT * FROM expenditurestudents WHERE  month=? AND year=?" 	;
		con.query(sql,[dattem,dattey],(error,result)=>{
			res.render("showdata",{table:result});
		})
	})
})

app.get("/mainpage",(req,res)=>{
	con.connect((error)=>{
		var sql="SELECT * FROM itemanni WHERE itemday =? AND itemmonth=?" 	;
		con.query(sql,[datted,dattem],(error,result)=>{
			res.render("mainpage",{table2:result});
		});
	});
});




app.listen("8000",()=>{
	
	console.log("Listening......");
})
