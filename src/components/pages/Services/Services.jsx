import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import {json} from "react-router-dom";

// Lista dostępnych usług

const availableServices = [
  {
    name: "Przęsło Klasyczne Edith",
    price: 500,
    description: "Edith to klasyczny, ponadczasowy, a zarazem uniwersalny system ogrodzeniowy zaprojektowany z myślą o klientach ceniących wysoką jakość połączoną z dyskretną elegancją.",
    imgUrl: "images/service_image/przesloklasyczne3.jpg",
  },
  {
    name: "Przęsło Klasyczne Camil",
    price: 700,
    description:"Camil to ogrodzenie, w którym elementem ozdobnym są drobnozwojne szyszki, które nadają mu lekkości, a z wygiętą w łuk górną poprzeczką tworzy spójną kompozycję w klasycznym stylu.",
    imgUrl: "images/service_image/przesloklasyczne2.jpg"
  },
  {
    name: "Przęsło Nowoczesne Rafael",
    price: 800,
    description:"Rafael to bardzo nowoczesne i estetyczne ogrodzenie, które szczelnie zasłoni Państwa posesję przed oczami ciekawskich. System zbudowano z giętej szerokiej blachy.",
    imgUrl: "images/service_image/przeslonowoczesne2.jpg"
  },
  {
    name: "Przęsło Nowoczesne Claudia",
    price: 600,
    description:"Ogrodzenie Claudia to klasyczne wzornictwo charakteryzujące się trwałością oraz estetyką wykonania. Juga to mocna i stabilna konstrukcja. Ogrodzenie Juga pomalowane jest farbą w kolorze antracytowym.",
    imgUrl: "images/service_image/przeslonowoczesne.jpg"
  },
  {
    name: "Brama dwuskrzydłowa",
    price: 4860,
    description: "Brama dwuskrzydłowa to najbardziej klasyczny rodzaj bramy, jaki możemy zastosować na naszej posesji. Jest elegancka, pięknie zaprezentuje się na działkach, które dysponują dłuższym podjazdem.",
    imgUrl: "images/service_image/bramadwuskrzydlowa.png",
  },
  {
    name: "Brama przesówna",
    price: 4000,
    description: "Chcesz zaoszczędzić miejsce na posesji? Nie masz ograniczonej przestrzeni wzdłuż działki? Postaw na bramy przesuwne z naszego sklepu, które nie tylko świetnie się prezentują, lecz także są funkcjonalne.",
    imgUrl: "images/service_image/bramaprzesówna.png",
  },
  {
    name: "Brama teleskopowa",
    price: 4860,
    description: "Dobór odpowiedniej bramy jest trudny, zwłaszcza na działkach o ograniczonej przestrzeni. Z reguły do wyboru masz tradycyjne opcje: rozwieralną i przesuwną. Istnieją także inne rozwiązania, na przykład brama teleskopowa.",
    imgUrl: "images/service_image//bramateleskopowa.jpg",
  },
  {
    name: "Brama łamana",
    price: 6750,
    description: "Brama łamana najczęściej składa się z jednego lub dwóch skrzydeł. W zależności od potrzeb lub oczekiwań brama harmonijkowa sprawdzi się idealnie zarówno na posesji prywatnej, jak i firmowej.",
    imgUrl: "images/service_image/bramalamana.jpg",
  },
  {
    name: "furtka z klamką",
    price: 780,
    description: "Dobór odpowiedniej furtki, choć często jest traktowany drugorzędnie, okazuje się niezwykle ważny dla estetycznego wyglądu całej posesji. Co więcej, ten element ma znaczący wpływ na bezpieczeństwo domowników.",
    imgUrl: "images/service_image/furtkazklamka.jpg",
  },
  {
    name: "furtka z elektrozaczepem",
    price: 1200,
    description: "Dobór odpowiedniej furtki, choć często jest traktowany drugorzędnie, okazuje się niezwykle ważny dla estetycznego wyglądu całej posesji. Co więcej, ten element ma znaczący wpływ na bezpieczeństwo domowników.",
    imgUrl: "images/service_image/furtkazelektrozaczepem.png",
  },
];

// Komponent wyświetlający listę usług oraz pobierający kurs Euro z api.
const Services = ({name}) => {
  
  const [{data, loading, error}, setResult] = useState({data: null, loading: true, error: null});

  const fetchExchangeRate = async () => {
    const ratesTimestamp = localStorage.getItem('rateTimestamp');

// Sprawdzenie daty, jesli jest , i nie jest starszy niz 24h to zwracamy z local storage.

    if (ratesTimestamp && Date.now() - ratesTimestamp <= 1000 * 60 * 60 * 24) {
      setResult({data: JSON.parse(localStorage.getItem('rate')), loading: false, error: null});
      return;
    }

//pobrtanie kursu Euro z api i zapisanie w local storage

    try {
      const resp = await fetch('https://api.nbp.pl/api/exchangerates/rates/A/EUR?format=json');
      const json = await resp.json();

      setResult({data: json, loading: false, error: null});
      localStorage.setItem('rateTimestamp', Date.now());
      localStorage.setItem('rate', JSON.stringify(json));
    } catch (err) {
      setResult({data: null, loading: false, error: err});
    }
  }

  useEffect(() => {
    fetchExchangeRate();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const {code, rates: [{mid}]} = data;
 
  const exchangeRate = {
    currencyCode: code, 
    rate: mid
  };

// zamiana obiektow na komponenty listy usług

  return (
    <div className="flex flex-row flex-wrap gap-5 row-gap-5">
      {availableServices.map((service) => (
        <Service {...service}  exchangeRate={exchangeRate}></Service>
      ))}
    </div>
  );
};

export default Services;
