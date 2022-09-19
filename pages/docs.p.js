import Head from "next/head";
import styles from "../styles/docs.module.css";
import { Navbar, Text, Link, Button, Image, Row } from "@nextui-org/react";


export default function DocsPage() {
    return <>
        <Head>
            <title>Docs</title>
        </Head>
        <Navbar>
            <Navbar.Brand>
                <Text className={styles.heading} size={30} b>
                    Screenshot-API
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Button bordered color="success" as={Link} href="/" auto>
                    <Image src="https://img.icons8.com/plumpy/24/000000/double-left.png" width={100} className={styles.navi} alt="left" />
                </Button>
            </Navbar.Content>
        </Navbar>
        <main className={styles.main}>
            <Row justify="center">
                API URL:
                <code className={styles.code}>
                    <span style={{ color: "white" }}>https://ss.newdev0.in</span>
                </code>
            </Row>
            <Text h3 id="request-option">
                <a href="#request-option">#</a>&nbsp;
                Request Options:-
            </Text><br />
            url (required): The url to take screenshot of, include protocol &#39;http/https&#39;.
        </main>
    </>
}