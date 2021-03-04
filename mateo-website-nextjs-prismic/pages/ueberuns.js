import Container from '../components/container'
import Intro from '../components/intro'
import Layout from '../components/layout'

import Head from 'next/head'
import Header from "../components/header";

export default function Homepage() {

    return (
        <>
            <Layout>
                <Head>
                    <title>MATEO - Über Uns</title>
                </Head>
                <Container>
                    <Header/>

                    <div>
                        <div className="font-extrabold text-2xl sm:text-6xl md:text-6xl items-center lg:text-7xl text-center mx-10
                        bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500
            bg-repeat
            bg-clip-text
            text-transparent
            uppercase
            antialiased mb-5">
                            Die Softwarelösung, die aus Mitarbeitern und Mietern wahre Fans macht.
                        </div>
                        <div className="grid md:grid-cols-2 mt-20">
                                <div className="flex justify-center items-center lg:col-span-1 ">
                                    <img
                                        className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                        src='./images/rocket.png'
                                        alt='Christian'
                                    />
                                </div>
                            <div className="flex flex-col">
                                <div className="font-extrabold text-5xl text-left">
                                    Unsere Vision
                                </div>
                                <div className="font-thin text-left text-2xl">
                                    A better rental experience for the world and
                                    beyond 🚀.
                                </div>
                                <div className="mt-2 font-light">
                                    Wir glauben an eine Welt, in der Vermieter und
                                    Mieter enger zusammenrücken. Eine Welt, in der die Mieterinteraktion eine tolle
                                    Erfahrung für beide Seiten ist. Mit MATEO wollen wir eine Plattform schaffen,
                                    die eine neue Kategorie für diese Industrie eröffnet – RENTAL EXPERIENCE.
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 mt-20">
                            <div className="flex justify-center items-center lg:col-span-1 order-2 ">
                                <img
                                    className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                    src='./images/graph.png'
                                    alt='Christian'
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-extrabold text-5xl text-left">
                                    Unsere Mission
                                </div>
                                <div className="font-thin text-left text-2xl">
                                    Wir helfen Vermietern mit einer digitalen Lösung, das bestmögliche
                                    Vermietungserlebnis zu schaffen.
                                </div>
                                <div className="mt-2 font-light">
                                    Die Interaktion zwischen Vermieter und Mieter benötigt heute unzählige manuelle
                                    Aktivitäten. Das führt zu unzufriedenen Mietern und zu hohen Kosten für Vermieter.
                                    Deshalb haben wir MATEO ins Leben gerufen, um Vermietern und Mietern endlich eine
                                    digitale Lösung zu bieten, die Sie im 21. Jahrhundert erwarten!
                                </div>
                            </div>
                        </div>


                        <div className="mt-20">
                            <div className="text-center font-extrabold text-6xl">Das Gründerteam</div>
                            <div className="mt-20">
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex justify-center items-center lg:col-span-1 ">
                                        <img
                                            className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                            src='./images/founder/Sebastian.jpg'
                                            alt='Sebastian'
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <div className="font-bold text-2xl text-center">
                                            Sebastian Frederik Jacobsen
                                        </div>
                                        <div className="font-light text-xl text-center">
                                            Founder & CEO
                                        </div>
                                        <div className="font-thin px-20 lg:px-15 text-center mt-3">
                                            Sebastian verbrachte den Großteil seiner Jugend in Shanghai. Im Anschluss
                                            absolvierte er ein Duales Studium bei SAP in Wirtschaftsinformatik und ein
                                            Maserstudium an der Universität Mannheim/Lund Universität in
                                            Wirtschaftsinformatik. In seiner Laufbahn sammelte er mehr als 5 Jahre
                                            Erfahrung
                                            bei SAP im Produkt Design und in der Beratung strategischer Kunden Dazu
                                            besitzt
                                            er eine Leidenschaft für Produkte, die Anwender liebe. Neben der Fotographie
                                            besitzt er eine Vorliebe für Bonsais und die asiatische Kultur.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex justify-center items-center lg:col-span-1 lg:order-1">
                                        <img
                                            className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                            src='./images/founder/Philipp.jpg'
                                            alt='Philipp'
                                        />
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="font-bold text-2xl text-center">
                                            Philipp Steinrötter
                                        </div>
                                        <div className="font-light text-xl text-center">
                                            Founder & Product Development
                                        </div>
                                        <div className="font-thin px-20 lg:px-15 text-center mt-3">
                                            Philipp hat zunächst sein duales Studium bei SAP und im Anschluss seinen
                                            Master in Wirtschaftsinformatik an der Universität Mannheim abgeschlossen.
                                            Insgesamt verfügt er mehr als 5 Jahre Erfahrung als technischer Berater bei
                                            SAP. Das Entwickeln von hochwertigen technischen Lösungen ist eine seiner
                                            Kernkompetenzen. Wenn er nicht am Schreibtisch vorzufinden ist, dann ist er
                                            höchstwahrscheinlich Mountainbiken oder im Fitnessstudio.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex justify-center items-center lg:col-span-1 ">
                                        <img
                                            className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                            src='./images/founder/Christian.jpg'
                                            alt='Christian'
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <div className="font-bold text-2xl text-center">
                                            Christian Strauch
                                        </div>
                                        <div className="font-light text-xl text-center">
                                            Founder & Sales
                                        </div>
                                        <div className="font-thin px-20 lg:px-15 text-center mt-3">
                                            Christian hat 2018 sein duales Studium bei SAP abgeschlossen und im
                                            Anschluss ein Sales Trainee Programm der SAP absolviert. In den letzten 3
                                            Jahren war Christian als Account Manager für deutsche
                                            Mittelstandsunternehmen aus den verschiedensten Industrien tätig. In seiner
                                            Tätigkeit hat er Unternehmen auf C-Level Ebene zur unternehmensweiten
                                            Digitalisierungsstrategie beraten. Er ist leidenschaftlicher Borussia
                                            Mönchengladbach Fan und absoluter Fußballliebhaber.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10">
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex justify-center items-center lg:col-span-1 lg:order-1">
                                        <img
                                            className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                            src='./images/founder/Domenik.jpg'
                                            alt='Domenik'
                                        />
                                    </div>
                                    <div className="lg:col-span-1">
                                        <div className="font-bold text-2xl text-center">
                                            Domenik Fox
                                        </div>
                                        <div className="font-light text-xl text-center">
                                            Founder & Business Development
                                        </div>
                                        <div className="font-thin px-20 lg:px-15 text-center mt-3">
                                            Domenik hat zunächst ein duales Studium bei SAP und dann seinen Master in
                                            Wirtschaftsinformatik an der Universität Mannheim abgeschlossen. Insgesamt
                                            verfügt er fast 6 Jahre Erfahrung als SAP Berater. Der Schwerpunkt seiner
                                            Tätigkeit liegt in der Beratung von Fortune 500 Unternehmen im Bereich
                                            Digitalisierung und Integration. Der regelmäßige Gang ins Fitnessstudio und
                                            leckeres Essen sind in der Freizeitgestaltung seine absoluten Vorlieben.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 mb-10">
                                <div className="grid lg:grid-cols-2">
                                    <div className="flex justify-center items-center lg:col-span-1 ">
                                        <img
                                            className="rounded-full h-24 w-24 flex items-center justify-center h-48 w-48"
                                            src='./images/founder/Timo.jpg'
                                            alt='Timo'
                                        />
                                    </div>
                                    <div className="col-span-1">
                                        <div className="font-bold text-2xl text-center">
                                            Timo Strauch
                                        </div>
                                        <div className="font-light text-xl text-center">
                                            Founder & Advisor+
                                        </div>
                                        <div className="font-thin px-20 lg:px-15 text-center mt-3">
                                            Timo hat ein duales Studium bei SAP und einen Master an der Universität
                                            Mannheim in Wirtschaftsinformatik abgeschlossen. Er ist seit mehr als 8
                                            Jahren Softwareentwickler mit Herz im B2B Umfeld. Er hat eine große
                                            Leidenschaft für das Bauen von technischen Produkten, die Anwender lieben.
                                            Eins seiner größten Hobbies ist die Gestaltung von Kunstwerken auf seinem
                                            Latte Macchiato als Barista.
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="row-span-1">


                        </div>

                    </div>

                </Container>
            </Layout>
        </>
    )
}
