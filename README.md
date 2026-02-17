## Question & Answer

## 1. What is the difference between null and undefined?
Answer : null এবং undefined হচ্ছে জাভাস্ক্রিপ্ট এর স্পেশাল টাইপ এর ডাটা টাইপ|

Undefined হচ্ছে এমন একটি ডাটা টাইপ যেটি দ্বারা বুঝা যায় যে একটি ভ্যারিয়েবল ডিক্লেয়ার করা হয়েছে কিন্তু কোনো মান এসাইন করা হয়নি| শুধু এটিই নয় বরং Undefined হওয়ার অন্যতম কতগুলো ঘটনা হচ্ছে,

১. ফাঙ্কশন লিখে তার মধ্যে রিটার্ন করতে ভুলে যাওয়া
২. ফাঙ্কশন এর প্যারামিটার লিখতে ভুলে যাওয়া
৩. অবজেক্ট এর এমন একটি প্রোপার্টি এক্সেস করতে যাওয়া যেটি নেই|

Undefined এর টাইপ চেক করলে Undefined ই পাওয়া যায়|

null এর এমন একটি স্পেশাল টাইপ যেটি দ্বারা মানহীন বা শুন্য অবস্থাকে বোঝায়| 

শূন্য বা মানহীন হলেও মূল এর type চেক করতে গেলে দেখা যাবে null মূলত একটি অবজেক্ট|

## 2. What is the use of the map() function in JavaScript? How is it different from forEach()?
Answer : জাভাস্ক্রিপ্ট এ map () একটি array মেথড যেটির মাধ্যমে একটি array এর প্রত্যেকটি এলিমেন্ট নিয়ে কিছু কাজ করে একটি নতুন array রিটার্ন করা| 

মূলত, অরিজিনাল array কে অপরিবর্তনশীল রেখে কোনো কাজ করতে চাইলে ম্যাপ ব্যাবহার করা হয়| 

map() এর তিনটি প্যারামিটার (element , index , array ) নিয়ে থাকে|

অন্যদিকে, forEach () ও একটি array মেথড যেটি iterative কাজ করতে বেশি ব্যবহার হয়| map()
এর মতো এটি নতুন কোনো array রিটার্ন করে না| বরং অরিজিনাল array এর প্রত্যেকটি এলিমেন্ট এর উপর কিছু কাজ বা ফাঙ্কশন execute করে| 
 
## 3. What is the difference between == and === ?
Answer : জাভাস্ক্রিপ্ট এ ২ ধরণের equality অপারেটর আছে 

১. Loose Equality (==)
২. Strict Equality  (===)

Loose Equality দ্বারা মানের euqality চেক করা যথাযত নয় কারণ এটি equality চেক করার আগে type coercion করে নেয়|

example : 
7 == '7' //true

অন্যদিকে,
Strict Equality type coercion করে না| এটি মান এবং এর টাইপ দুটিই চেক করে| যার ফলে কোনো মানের equality চেক এর efficiency বেড়ে যায়

7 === 7 //false 


## 4. What is the significance of async/await in fetching API data?
Answer : async / await জাভাস্ক্রিপ্ট এর অন্যতম গুরুত্বপূর্ণ কনসেপ্ট গুলোর একটি|

মূলত api call করার সময় যে ফাঙ্কশন গুলো লেখা হয় তার মধ্যে async / await ব্যবহার করলে সেটি synchronous কোড এর মতো আচরণ করে| তা ছাড়া fetch() মেথড ব্যবহার করার ফলে then () এর যে chain তৈরী হয় তা থেকে async / await আমাদের রক্ষা করে এবং readable code লিখতে সাহায্য করে|

এ ছাড়াও error handling ও async / await খুব গুরুত্বপূর্ণ কারণ try / catch ব্যবহার করে খুব সহজেই code run করার সময় detect করা যায়| 

## 5. Explain the concept of Scope in JavaScript (Global, Function, Block).
Answer : জাভাস্ক্রিপ্ট এ scope বলতে মূলত একটি ভ্যারিয়েবল একটি codebase এ কোথায় এক্সেস করা যাবে সেটিকে বোঝায়| 

এই scope মূলত ৩ ধরণের| 
১. Global scope 
২. Functional scope 
৩. Block scope 

১. Global scope : 
নাম শুনলেই বোঝা যায় global scope এ থাকা ভ্যারিয়েবল মূলত সব জায়গা থেকেই এক্সেস করা যাবে| এখন সেটি ফাঙ্কশন এর ভিতরে হোক বা বাইরে 

২. Functional scope : 
Functional scope শুধু মাত্র একটি function এর ভিতরে সীমাবদ্ধ| function এর বাইরে এই ভ্যারিয়েবল এর কোনো অস্তিত্ব নেই| জাভাস্ক্রিপ্টে ভ্যারিয়েবল ডিক্লেয়ার করতে ব্যবহার করা (var , let , const ) Functional scope এর আন্ডারে পরে|

৩. Block scope :
Block of code যখন বলা হয় তখন বোঝানো হয় ({}) মধ্যে যে কোডগুলো আছে সেগুলো| তাহলে Block scope হলো ওই ভ্যারিয়েবল গুলো যেগুলো ({}) মধ্যে পরে| let এবং const কে Block scope বলা হয়   


## 🔗 Submission
- **Live Link :** https://flourishing-bunny-386fa6.netlify.app/
- **GitHub Repository:** https://github.com/golamsarwar96/swiftcart