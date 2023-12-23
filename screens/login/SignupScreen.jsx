import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  where,
  doc,
  setDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/user/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = () => {
  const [isValid, setIsValid] = useState(false);
  const isValueUnique = async (collectionName, fieldName, value) => {
    const unsub2 = onSnapshot(
      query(collection(db, collectionName), where(fieldName, "==", value)),
      (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        if (list.length > 0) {
          setIsValid(false);
        } else {
          setIsValid(true);
        }
      }
    );
  };

  const auth = getAuth();
  const dispatch = useDispatch();

  const products = [
    {
      category_id: "كل المنتجات",
      url: "product1",
      name: "اسم المنتج",
      image: "",
      review: "4",
      show: "1",
      user: "lcEW4Tv9D3bzgcRxQQa1890Ge4y1",
      price: "1000",
      gallery: [
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666746031360main?alt=media&token=1c9c20bc-8346-41e8-8654-babd2d4d58dc",
      ],
      offers: [
        {
          qty: 0,
          title: "",
          price: 0,
        },
        {
          title: "",
          price: 0,
          qty: 0,
        },
        {
          title: "",
          price: 0,
          qty: 0,
        },
        {
          title: "",
          price: 0,
          qty: 0,
        },
      ],
      oldPrice: "1900",
      sku: "FW02",
      options: [],
      textEditor:
        '<p class="ql-align-center"><span style="color: rgb(0, 0, 0);">هنا سيكون وصف المنتج الخاص بك.*تعليمات حول كتابة وصف احترافي لمنتجك:يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية كتابة وصف إحترافي لمنتجك.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية اضافة منتج جديد بمتجرك الإلكتروني.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;</span><a href="https://foorweb.net/market/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 51, 255);">market.foorweb.net</a><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;</span></p>',
      timeStamp: {
        seconds: 1666746110,
        nanoseconds: 982000000,
      },
      short: "وصف قصير للمنتج ❤️",
      qty: "8",
    },
    {
      image: "",
      show: "1",
      url: "product2",
      options: [
        {
          option1: "",
          title: "",
          option2: "",
          option3: "",
          option4: "",
        },
      ],
      offers: [
        {
          qty: "",
          title: "",
          price: "",
        },
        {
          qty: "",
          price: "",
          title: "",
        },
        {
          price: "",
          title: "",
          qty: "",
        },
        {
          qty: "",
          title: "",
          price: "",
        },
      ],
      price: "1000",
      user: "lcEW4Tv9D3bzgcRxQQa1890Ge4y1",
      name: "اسم المنتج",
      oldPrice: "2000",
      category_id: "كل المنتجات",
      gallery: [
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666746247191main?alt=media&token=ce9166d5-06db-4d64-81de-625581e564c7",
      ],
      review: "3",
      textEditor:
        '<p class="ql-align-center"><span style="color: rgb(0, 0, 0);">هنا سيكون وصف المنتج الخاص بك.*تعليمات حول كتابة وصف احترافي لمنتجك:يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية كتابة وصف إحترافي لمنتجك.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية اضافة منتج جديد بمتجرك الإلكتروني.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;</span><a href="https://foorweb.net/market/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 51, 255);">market.foorweb.net</a><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;</span></p>',
      sku: "FW04",
      short: "وصف قصير للمنتج ❤️",
      timeStamp: {
        seconds: 1666746252,
        nanoseconds: 933000000,
      },
      qty: "1",
    },
    {
      category_id: "كل المنتجات",
      url: "product3",
      show: "1",
      gallery: [
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666746333590main?alt=media&token=6ea4fcb9-48e6-454f-8ed2-0ec9e597efc1",
      ],
      image: "",
      textEditor:
        '<p class="ql-align-center"><span style="color: rgb(0, 0, 0);">هنا سيكون وصف المنتج الخاص بك.*تعليمات حول كتابة وصف احترافي لمنتجك:يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية كتابة وصف إحترافي لمنتجك.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية اضافة منتج جديد بمتجرك الإلكتروني.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;</span><a href="https://foorweb.net/market/" rel="noopener noreferrer" target="_blank" style="color: rgb(107, 36, 178);">market.foorweb.net</a><span style="color: rgb(107, 36, 178);">&nbsp;</span></p>',
      timeStamp: {
        seconds: 1666746348,
        nanoseconds: 916000000,
      },
      sku: "FW05",
      price: "1000",
      options: [
        {
          option2: "",
          option1: "",
          option3: "",
          title: "",
          option4: "",
        },
      ],
      short: "وصف قصير للمنتج ❤️",
      review: "2",
      oldPrice: "3200",
      offers: [
        {
          qty: "",
          price: "",
          title: "",
        },
        {
          title: "",
          price: "",
          qty: "",
        },
        {
          qty: "",
          price: "",
          title: "",
        },
        {
          price: "",
          qty: "",
          title: "",
        },
      ],
      qty: "4",
      name: "اسم المنتج",
      user: "lcEW4Tv9D3bzgcRxQQa1890Ge4y1",
    },
    {
      show: "1",
      url: "product4",
      price: "1000",
      gallery: [
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666745745542main?alt=media&token=fbaff447-2b08-49e2-b427-caa7858075ac",
      ],
      options: [
        {
          option3: "",
          option2: "",
          title: "",
          option4: "",
          option1: "",
        },
      ],
      offers: [
        {
          qty: "",
          title: "",
          price: "",
        },
        {
          qty: "",
          price: "",
          title: "",
        },
        {
          qty: "",
          title: "",
          price: "",
        },
        {
          price: "",
          qty: "",
          title: "",
        },
      ],
      category_id: "كل المنتجات",
      user: "lcEW4Tv9D3bzgcRxQQa1890Ge4y1",
      qty: "5",
      name: "اسم المنتج",
      oldPrice: "1900",
      timeStamp: {
        seconds: 1666745860,
        nanoseconds: 236000000,
      },
      textEditor:
        '<p class="ql-align-center"><span style="color: rgb(0, 0, 0);">هنا سيكون وصف المنتج الخاص بك.*تعليمات حول كتابة وصف احترافي لمنتجك:يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية كتابة وصف إحترافي لمنتجك.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية اضافة منتج جديد بمتجرك الإلكتروني.يمكنك زيارة&nbsp;هذه الصفحة </span><a href="https://foorweb.net/market/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 51, 255);">market.foorweb.net</a><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;</span></p>',
      review: "5",
      image: "",
      sku: "FW01",
    },
    {
      sku: "FW03",
      show: "1",
      url: "product5",
      short: "وصف قصير للمنتج ❤️",
      timeStamp: {
        seconds: 1666746197,
        nanoseconds: 372000000,
      },
      options: [
        {
          option3: "",
          option4: "",
          option1: "",
          title: "",
          option2: "",
        },
      ],
      image: "",
      qty: "120",
      textEditor:
        '<p class="ql-align-center"><span style="color: rgb(0, 0, 0);">هنا سيكون وصف المنتج الخاص بك.*تعليمات حول كتابة وصف احترافي لمنتجك:يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية كتابة وصف إحترافي لمنتجك.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;لمعرفة كيفية اضافة منتج جديد بمتجرك الإلكتروني.يمكنك زيارة&nbsp;هذه الصفحة&nbsp;</span><a href="https://foorweb.net/market/" rel="noopener noreferrer" target="_blank" style="color: rgb(153, 51, 255);">market.foorweb.net</a><span style="color: rgb(0, 0, 0);">&nbsp;&nbsp;</span></p>',
      price: "1000",
      gallery: [
        "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666746178071main?alt=media&token=5811cff5-7715-4c5b-841a-855897613ee7",
      ],
      name: "اسم المنتج",
      category_id: "كل المنتجات",
      user: "lcEW4Tv9D3bzgcRxQQa1890Ge4y1",
      oldPrice: "1900",
      offers: [
        {
          price: "",
          title: "",
          qty: "-2",
        },
        {
          qty: "",
          price: "",
          title: "",
        },
        {
          qty: "",
          title: "",
          price: "",
        },
        {
          price: "",
          title: "",
          qty: "",
        },
      ],
      review: "3",
    },
  ];

  const [loginForm, setLoginForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    store: "",
  });

  const [loginSign, setLoginSign] = useState(false);

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    if (loginSign) {
      signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(loginUser(user.uid));
          localStorage.setItem("token", user.uid);
          setError(false);
          // ...
        })
        .catch((error) => {
          console.log(error);
          setError(true);
        });
    } else {
      createUserWithEmailAndPassword(auth, loginForm.email, loginForm.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          addDoc(collection(db, "store"), {
            user: user.uid,
            color2: "#ffb43f",
            reqNumber: 5,
            reqTime: 2,
            country: "الجزائر",
            currency: "الدينار",
            currencySymbol: "دج",
            categories: [
              "كل المنتجات",
              "التصنيف -1-",
              "التصنيف -2-",
              "التصنيف -3-",
              "التصنيف -4-",
              "https://foorweb.net/1-1",
              "https://foorweb.net/2-1.png",
              "https://foorweb.net/3-1.png",
              "https://foorweb.net/4-1.png",
              "https://foorweb.net/5-1.png",
            ],
            delevery: {
              address: true,
              free: true,
              activeCities: true,
              paid: false,
              states: [
                {
                  name: "أدرار",
                  hide: true,
                  price: "500",
                  wilaya_code: "01",
                },
                {
                  price: "500",
                  hide: true,
                  wilaya_code: "02",
                  name: "الشلف",
                },
                {
                  wilaya_code: "03",
                  price: 500,
                  hide: true,
                  name: "الأغواط",
                },
                {
                  price: 600,
                  hide: true,
                  wilaya_code: "04",
                  name: "أم البواقي",
                },
                {
                  price: 5,
                  name: "باتنة",
                  hide: false,
                  wilaya_code: "05",
                },
                {
                  wilaya_code: "06",
                  hide: true,
                  price: 100,
                  name: "بجاية",
                },
                {
                  wilaya_code: "07",
                  name: "بسكرة",
                  hide: false,
                  price: "300",
                },
                {
                  hide: false,
                  wilaya_code: "09",
                  price: 0,
                  name: "البليدة",
                },
                {
                  name: "بشار",
                  hide: false,
                  wilaya_code: "08",
                  price: 100,
                },
                {
                  name: "البويرة",
                  price: 100,
                  wilaya_code: "10",
                  hide: false,
                },
                {
                  wilaya_code: "11",
                  price: 100,
                  hide: false,
                  name: "تمنراست",
                },
                {
                  name: "تبسة",
                  wilaya_code: "12",
                  price: 100,
                  hide: false,
                },
                {
                  wilaya_code: "13",
                  price: 100,
                  hide: false,
                  name: "تلمسان",
                },
                {
                  name: "تيارت",
                  price: 100,
                  wilaya_code: "14",
                  hide: false,
                },
                {
                  hide: false,
                  name: "تيزي وزو",
                  price: 100,
                  wilaya_code: "15",
                },
                {
                  wilaya_code: "16",
                  price: 100,
                  hide: false,
                  name: "الجزائر",
                },
                {
                  wilaya_code: "17",
                  hide: false,
                  price: 100,
                  name: "الجلفة",
                },
                {
                  hide: false,
                  wilaya_code: "18",
                  price: 100,
                  name: "جيجل",
                },
                {
                  price: 100,
                  name: "سطيف",
                  hide: false,
                  wilaya_code: "19",
                },
                {
                  name: "سعيدة",
                  price: 100,
                  wilaya_code: "20",
                  hide: false,
                },
                {
                  price: 100,
                  name: "سكيكدة",
                  wilaya_code: "21",
                  hide: false,
                },
                {
                  hide: false,
                  name: "سيدي بلعباس",
                  price: 100,
                  wilaya_code: "22",
                },
                {
                  hide: false,
                  name: "عنابة",
                  wilaya_code: "23",
                  price: 100,
                },
                {
                  price: 100,
                  hide: false,
                  wilaya_code: "24",
                  name: "قالمة",
                },
                {
                  price: 100,
                  name: "قسنطينة",
                  hide: false,
                  wilaya_code: "25",
                },
                {
                  name: "المدية",
                  price: 100,
                  wilaya_code: "26",
                  hide: false,
                },
                {
                  hide: false,
                  name: "مستغانم",
                  wilaya_code: "27",
                  price: 100,
                },
                {
                  wilaya_code: "28",
                  price: 100,
                  name: "المسيلة",
                  hide: false,
                },
                {
                  price: 100,
                  wilaya_code: "29",
                  name: "معسكر",
                  hide: false,
                },
                {
                  name: "ورقلة",
                  hide: false,
                  price: 100,
                  wilaya_code: "30",
                },
                {
                  hide: false,
                  name: "وهران",
                  wilaya_code: "31",
                  price: 100,
                },
                {
                  hide: false,
                  name: "البيض",
                  price: 100,
                  wilaya_code: "32",
                },
                {
                  hide: false,
                  name: "إليزي",
                  wilaya_code: "33",
                  price: 100,
                },
                {
                  name: "برج بوعريريج",
                  hide: false,
                  price: 100,
                  wilaya_code: "34",
                },
                {
                  name: "بومرداس",
                  wilaya_code: "35",
                  hide: false,
                  price: 100,
                },
                {
                  name: "الطارف",
                  price: 100,
                  hide: false,
                  wilaya_code: "36",
                },
                {
                  wilaya_code: "37",
                  price: 100,
                  hide: false,
                  name: "تندوف",
                },
                {
                  wilaya_code: "38",
                  name: "تيسمسيلت",
                  hide: false,
                  price: 100,
                },
                {
                  wilaya_code: "39",
                  name: "الوادي",
                  price: 100,
                  hide: false,
                },
                {
                  name: "خنشلة",
                  wilaya_code: "40",
                  hide: false,
                  price: 100,
                },
                {
                  hide: false,
                  price: 100,
                  name: "سوق أهراس",
                  wilaya_code: "41",
                },
                {
                  hide: false,
                  price: 100,
                  name: "تيبازة",
                  wilaya_code: "42",
                },
                {
                  name: "ميلة",
                  price: 100,
                  wilaya_code: "43",
                  hide: false,
                },
                {
                  name: "عين الدفلة",
                  wilaya_code: "44",
                  price: 100,
                  hide: false,
                },
                {
                  hide: false,
                  wilaya_code: "45",
                  price: 100,
                  name: "النعامة",
                },
                {
                  name: "عين تيموشنت",
                  price: 100,
                  wilaya_code: "46",
                  hide: false,
                },
                {
                  name: "غرداية",
                  hide: false,
                  price: 100,
                  wilaya_code: "47",
                },
                {
                  hide: false,
                  name: "غليزان",
                  wilaya_code: "48",
                  price: 100,
                },
                {
                  hide: false,
                  price: 100,
                  wilaya_code: "49",
                  name: "تيميمون",
                },
                {
                  name: "برج باجي مختار",
                  wilaya_code: "50",
                  price: 100,
                  hide: false,
                },
                {
                  price: 100,
                  name: "أولاد جلال",
                  wilaya_code: "51",
                  hide: false,
                },
                {
                  hide: false,
                  wilaya_code: "52",
                  price: 100,
                  name: "بني عباس",
                },
                {
                  name: "عين صالح",
                  price: 100,
                  wilaya_code: "53",
                  hide: false,
                },
                {
                  price: 100,
                  name: "عين قزام",
                  hide: false,
                  wilaya_code: "54",
                },
                {
                  wilaya_code: "55",
                  price: 100,
                  hide: false,
                  name: "تقرت",
                },
                {
                  name: "جانت",
                  price: 100,
                  wilaya_code: "56",
                  hide: false,
                },
                {
                  name: "المغير",
                  price: 100,
                  wilaya_code: "57",
                  hide: false,
                },
                {
                  price: 100,
                  name: "المنيعة",
                  wilaya_code: "58",
                  hide: false,
                },
              ],
            },
            googleShit: "",
            color1: "#8760a1",
            title: "Foorweb - أفضل منصة إنشاء متاجر الكترونية",
            img: "https://firebasestorage.googleapis.com/v0/b/e-commerce-8f7c7.appspot.com/o/1664392017259main?alt=media&token=2f419d00-81b5-4459-a7fc-c5641b16881c",
            logo: "https://firebasestorage.googleapis.com/v0/b/e-commerce-17eb9.appspot.com/o/1666130495384main?alt=media&token=f3902752-d5b3-424d-b685-393b213eb2e1",
            footer: "حقوق محفوظة ل foorweb",
            visits: 0,
            facebookPixel: "",
            SocialMedia: {
              phone: "066666666",
              facebook: "https://www.facebook.com/F0orweb",
              insta: "https://www.instagram.com/foorweb/",
            },
            texting: {
              thanks:
                '<h2 class="ql-align-right"><strong>شركة فوور ويب تشكرك على التعامل معها سعر التوصيل لكل ولايات الجزائر</strong></h2><p class="ql-align-right"><br></p><p class="ql-align-center"><strong>سيتم الاتصال بك عبر أحد الارقام التالية : 0666666666</strong></p><p class="ql-align-center"><br></p>',
              heading1: "مرحبا بكم في متجر ديمو فوورويب 🚀",
              heading3: "كتابة أي وصف عن متجرك الالكتروني",
              heading2: "تحدث عن علامتك التجارية !",
              return:
                '<p class="ql-align-right"><strong>سياسية الضمان :</strong></p><p class="ql-align-right">تلتزم – بتعويض زبائنها في حالة ما وجد المنتج معطوبا او مكسورا او فيه خلل ، منتجاتنا هي منتجات لشركات رائدة في مجال التجميل و الصحة و كل منتجاتها لديها ترخيص من وزارة الصحة و تخضع للقانون التجاري الجزائري .</p><p class="ql-align-right"><br></p><p class="ql-align-right"><strong>سياسة التوزيع :</strong></p><p class="ql-align-right">يتم الاتصال بالزبون بعد 24 ساعة من وضع الطلبية ، وتاكيدها معه هاتفيا يتم اخذ معلومات الزبون التي قام بكتابتهابمحض ارادته واستعمالها لغرض ايصال الطلبية الى العنوان المتفق عليه ، وتسلم الطلبية في غضون 2-7 ايام على حسب الولاية .</p>',
              pay: '<p class="ql-align-right"><strong>سياسة الدفع :</strong></p><p class="ql-align-right">تنتهج سياسة الدفع عند الاستلام ، اي اننا لا نطلب من الزبون دفع اي مبلغ مسبق ونعتمد على الثقة المتبادلة بين الشركة وزبائنها ، يتم دفع ثمن المنتج عند تسليمه فقط ، و ترفق فاتورة المنتج معه موقعة ومصادق عليها من طرف الشركة .</p>',
            },
          }).then(
            addDoc(collection(db, "account"), {
              store: `https://${loginForm.store}.foorweb.store/`,
              storeName: `https://${loginForm.store}.foorweb.store/`,
              phone: loginForm.phone,
              birthDay: "1998-07-06",
              name: loginForm.name,
              user: user.uid,
              email: loginForm.email,
              subscription: {
                endDate: Timestamp.fromDate(new Date(`2023-02-01T00:00:00Z`)),
                plan: "الاساسية",
                tokens: 30,
              },
            }).then(
              products.forEach((element, index) => {
                addDoc(collection(db, "products"), {
                  ...element,
                  user: user.uid,
                }).then(
                  index === products.length - 1 &&
                    dispatch(loginUser(user.uid)),
                  index === products.length - 1 &&
                    localStorage.setItem("token", user.uid)
                );
              }),
              ReactPixel.track("Purchase", 2900)
            )
          );
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(true);
          // ..
        });
    }
  };

  useEffect(() => {
    if (loginForm.store.length < 4 || /[\u0600-\u06FF]/.test(loginForm.store)) {
      setIsValid(false);
    } else {
      isValueUnique(
        "account",
        "store",
        `https://${loginForm.store}.foorweb.store`
      );
      const newValue = loginForm.store.replace(/\s+/g, "-"); // تحويل الفراغات إلى إطار
      setLoginForm({ ...loginForm, store: newValue, storeName: newValue });
    }
  }, [loginForm.store]);
  const [hidePassword, setHidePassword] = useState(true);
  const [rememberMe, setRememberMe] = useState(false);

  //i changed this part of the code, had to use AsyncStorage instead of localStorage to remember the auth state

  useEffect(() => {
    const getRememberMeValue = async () => {
      try {
        const value = await AsyncStorage.getItem("rememberMe");
        setRememberMe(value === "true");
      } catch (e) {
        console.log(e);
      }
    };
    getRememberMeValue();
  }, []);

  const handleRememberMe = async () => {
    try {
      await AsyncStorage.setItem("rememberMe", JSON.stringify(!rememberMe));
      setRememberMe(!rememberMe);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../public/Logo.png")}
          />
        </View>
        <View style={styles.imageContainer}>
          <Text style={styles.textTitleStyle}>تسجيل الدخول إلى حسابك</Text>
        </View>
        <View>
          {/* first input */}
          <View style={{ marginTop: 24 }}>
            <View>
              <Text style={styles.label}>البريد الإلكتروني</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                keyboardType="email-address"
                value={loginForm.email}
                onChangeText={(text) =>
                  setLoginForm({ ...loginForm, email: text })
                }
                placeholder="مثال: mystore@foorweb.com"
              />
              {error && (
                <Text style={{ color: "#ef4444" }}>
                  البريد الالكتروني موجود بالفعل
                </Text>
              )}
            </View>
          </View>

          {/* second input */}
          <View style={{ marginTop: 24 }}>
            <View>
              <Text style={styles.label}>كلمة السر</Text>
            </View>
            <View>
              <TextInput
                style={styles.input}
                secureTextEntry={hidePassword}
                value={loginForm.password}
                onChangeText={(text) =>
                  setLoginForm({ ...loginForm, password: text })
                }
                placeholder="********"
              />
              <TouchableOpacity
                style={styles.iconButton}
                onPress={() => setHidePassword(!hidePassword)}
              >
                {hidePassword ? (
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="black" />
                )}
              </TouchableOpacity>
            </View>
          </View>

          {/* button */}
          <View style={{ marginTop: 64 }}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>
                {loginSign ? "إنشاء متجر" : "إنشاء متجر"}
              </Text>
            </TouchableOpacity>
            <View style={styles.lastText}>
              <Text>ليس لديك حساب؟ تسجيل</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    marginTop: 0,
    paddingHorizontal: 60,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 80,
    marginBottom: 20,
  },
  textTitleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: "#6B7280",
    backgroundColor: "transparent",
    borderWidth: 0.5,
    borderColor: "#d1d5db",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#8961A1",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
  },
  lastText: {
    alignItems: "center",
    marginTop: 16,
  },
  iconButton: {
    position: "absolute",
    right: 10,
    top: 4,
    height: "100%",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
});

export default SignupScreen;
