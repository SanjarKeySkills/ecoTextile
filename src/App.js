import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout, { ContentFallback } from "./layout/DefaultLayout";
import { MainPage } from "./pages/MainPage/MainPage.async";
import { MissionPage } from "./pages/MissionPage/MissionPage.async";
import { ContactPage } from "./pages/ContactPage/ContactPage.async";
import { MemberPage } from "./pages/MemberPage/MemberPage.async";
import { OurteamPage } from "./pages/OurteamPage/OurteamBlock.async";
import { ItemPage } from "./pages/ItemPage/ItemPage.async";
import { GalleryPage } from "./pages/GalleryPage/GalleryPage.async.jsx";
import { VacancyPage } from "./pages/VacancyPage/VacancyPage.async.jsx";
// import { ErrorPage } from "./pages/ErrorPage/ErrorPage.async.jsx";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route
                            index
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <MainPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/mission"
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <MissionPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/contact"
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <ContactPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/team"
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <OurteamPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/member/:type/:id"
                            // в таком виде to useParams будет приходить строках в виде ключа с теми значениями
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <MemberPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/item/:type/:id"
                            // в таком виде to useParams будет приходить строках в виде ключа с теми значениями
                            element={
                                <Suspense fallback={<div>Loading...</div>}>
                                    <ItemPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/gallery"
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <GalleryPage />
                                </Suspense>
                            }
                        />
                        <Route
                            path="/vacancy"
                            element={
                                <Suspense fallback={<ContentFallback />}>
                                    <VacancyPage />
                                </Suspense>
                            }
                        />
                    </Route>
                    {/* <Route
                        path="*"
                        element={
                            <Suspense fallback={<ContentFallback />}>
                                <ErrorPage />
                            </Suspense>
                        }
                    /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
