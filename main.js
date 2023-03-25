let foodList=[
{
	id:1,
	name:"briyani",
	cuisine:"chennai",
	rating:4.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sra4jw8dyuirglnrphut"
},
{
	id:2,
	name:"briyani",
	cuisine:"chennai",
	rating:3.4,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cw13yba11vdsshxqoph5"
},
{
	id:3,
	name:"briyani",
	cuisine:"chennai",
	rating:2.9,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/k6veqsgjiaklqhiirsq6"
},
{
	id:4,
	name:"briyani",
	cuisine:"chennai",
	rating:4.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ssugnnlqt7yzoyygtvvy"
},
{
	id:5,
	name:"briyani",
	cuisine:"chennai",
	rating:4.1,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hrzzefyekcewtpemua7j"
},
{
	id:6,
	name:"briyani",
	cuisine:"chennai",
	rating:3.9,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/pjqb1e27sotcwhw97wjb"
},
{
	id:7,
	name:"briyani",
	cuisine:"chennai",
	rating:4.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fca093fa246fbccd7b3074d71b11ab0f"
},
{
	id:8,
	name:"briyani",
	cuisine:"chennai",
	rating:3.2,
	imgurl:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/wivvdkixtsfefs70lloi"
}]



let cont=document.querySelector(".container");
	let cards=document.createElement("div");
	cards.classList.add("row");
	console.log(cards);
	cont.appendChild(cards);
	
	foodList.forEach(function(e){
		
		let div=document.createElement("div");
			div.classList.add("col");
			cards.appendChild(div);
			
		let div2=document.createElement("div");
			div2.classList.add("col-card");
			div.appendChild(div2);
			
		let img=document.createElement("img");
			img.src=e.imgurl;
			div2.appendChild(img);
			
		let head=document.createElement("h2");
			head.innerHTML=e.name;
			div2.appendChild(head);
		
		let place=document.createElement("h3");
			place.innerHTML=e.cuisine;
			div2.appendChild(place);
			
		let rate=document.createElement("span");
			rate.innerHTML=e.rating;
			div2.appendChild(rate);
			
		if(e.rating<=2.9 && e.rating>2){
			rate.style.backgroundColor="red";
		}
		else if(e.rating>=3 && e.rating<3.9){
			rate.style.backgroundColor="orange";
		}
		else{
			rate.style.backgroundColor="green";
		}
			
		
		
		
	})
	
	
	
	
	