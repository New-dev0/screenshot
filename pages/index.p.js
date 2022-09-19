import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import { Text, Input, Link, Row, Button, Card, Grid, Image } from "@nextui-org/react";
import { useMediaQuery } from './useMediaQuery';

// import useDarkMode from 'use-dark-mode';

const urls = ["https://github.com",
  "https://google.com",
  "https://nasa.gov",
  "https://www.tesla.com",
  "https://www.amazon.com",
  "https://apple.com",
  "https://react.com",
  "https://nextui.org",
  "https://io.google/2022",
  "https://gitlab.com",
  "https://wordpress.com",
  "https://telegram.org",
  "https://whatsapp.com",
  "https://hacktoberfest.com",
  "https://horoscope.com",
  "https://olacabs.com",
  "https://microsoft.com",
  "https://snapchat.com",
];


function getImage(uris) {
  return uris[Math.floor(Math.random() * uris.length - 1)];
}

var img = getImage(urls);

export default function Home() {
  // const dark = useDarkMode(true);  
  const [url, setUrl] = useState("");
  const [inp, setInput] = useState("");
  let furl = url || img;
  let gurl = `https://ss.newdev0.in/?url=${furl}&full=false`;
  const isMd = useMediaQuery(960);
  const _mr = isMd ? "0px" : "30vh"; 
  var maincard = <Card css={{ maxWidth: "80vh", background: 'Black', maxHeight: "75vh" }}>
  <Card.Body>
    <a href={gurl} download="Untitled">
      <Image alt="screenshot" loading="lazy" src={gurl} width="800" height="400" style={{backgroundColor: "ghostwhite"}}/>
    </a>
    {img && <Text className={styles.cardtext} css={{ textAlign: "end" }}>
      {(furl || "").substring(8)}</Text>}
  </Card.Body>
</Card>;

  function onPress(){
    setUrl(inp);
  }
  return (
    <>
      <Head>
        <title>Screenshot-API</title>
        <meta name="description" content="Generated screenshot from url in seconds." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Row justify="space-between" css={{ margin: "0 1rem" }}>
          <Text size={40} weight="extrabold" h1 css={{ textGradient: "29deg, purple 0%, $blue600 90%" }}>
            #SCREENSHOT-API
          </Text>
          <Button bordered flat size={"sm"} css={{ margin: "1rem 1rem 0 0", background: "white", padding: "1.2rem 0" }} as={Link} href="/docs" color="secondary">
            Docs
          </Button>
        </Row>
        <Row css={{ marginTop: "4rem", marginLeft: "1rem" }} justify={isMd ? "center" : "space-between"}>
          <div className={styles.left} style={{ width: "50vh", marginRight: _mr, marginTop: "2rem"}}>
            <Text id="features" h2 weight="extrabold" color="secondary" size={30}>
              #Features
            </Text>
            <Text h3 weight="extrabold" color="secondary" size={25} css={{ marginLeft: "4px" }}>
              - No Limits<br />
              - No API-KEY required.<br />
              - Easy to Integrate.
            </Text>
            <Row justify='center' css={{ marginTop: "4rem" }}>
              <Input width='45vh' size='xl' initialValue={img} onChange={(e) => setInput(e.currentTarget.value)} labelPlaceholder="Enter url">
            </Input>
              <Button onPress={onPress} bordered size="sm" auto css={{ padding: "18px", margin: "8px 1px 0 5px", background: "$blue100" }}>
                <Image alt="camera" width="40px" src="https://img.icons8.com/color/48/000000/camera.png" loading="lazy" />
              </Button></Row>
          </div>
          <Grid className={styles.right}>
            {!isMd && maincard}
          </Grid>        
        </Row>
        {isMd && <div style={{marginLeft: "5vh", marginTop: "8vh"}}>{maincard}</div>}
      </div>
    </>
  )
}
