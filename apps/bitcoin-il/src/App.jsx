import React, { useEffect } from 'react'

import { BitCoinIlSite, Header } from 'app-layout'

import { useIntl } from 'app-layout'
import {
  FormattedDisplayName,
  FormattedList,
  FormattedMessage,
  FormattedPlural
} from 'react-intl'

// import { BrowserRouter as Router } from 'react-router-dom'

import { IntlProvider } from 'react-intl'
import locales from '@bitil/locales'

function App() {
  const { language, setLanguage, messages } = useIntl()

  console.log('PROCESS:', import.meta.env.BASE_URL)

  useEffect(() => {
    console.log('🐕️', language)
  }, [language])
  // return <BitCoinIlSite setLanguage={setLanguage} />
  return (
    <IntlProvider
      messages={locales[language]}
      locale={language}
      defaultLocale="en"
    >
      {/* <Header /> */}
      <h4>NOT TRANSLATED - HERE IS NEW MESSAGE</h4>
      <button onClick={() => setLanguage('he')}>Use Il</button>
      <p>
        <FormattedMessage
          id="app.text"
          defaultMessage="This is some text"
          description="Link on react page"
        />
        <FormattedMessage
          id="main-title"
          defaultMessage="This is some text"
          description="Link on react page"
        />
        <FormattedMessage
          id="sub-title"
          defaultMessage="This is some text"
          description="Link on react page"
        />
        <FormattedPlural
          id="plural-example"
          value={12}
          one="sample"
          other="samples"
        />
        <FormattedDisplayName type="language" value="zh-Hans-SG" />
        <FormattedList type="conjunction" value={['Me', 'myself', 'I']} />
        <FormattedMessage
          id="foo"
          defaultMessage="To buy a shoe, <a>visit our website</a> and <cta>buy a shoe</cta>"
          values={{
            a: (chunks) => (
              <a
                class="external_link"
                target="_blank"
                href="https://www.example.com/shoe"
              >
                {chunks}
              </a>
            ),
            cta: (chunks) => <strong class="important">{chunks}</strong>
          }}
        />
      </p>
      <BitCoinIlSite
        setLanguage={setLanguage}
        FormattedMessage={FormattedMessage}
      />
      <h1>
        ********* THIS IS IN apps/bitcoin-il **************
        <button onClick={() => setLanguage('he')}>CHANGE TO IL</button>
      </h1>
    </IntlProvider>
  )
}
export default App

// import '@djitsu/themes/dist/themes/main-theme/main-theme-main-light.css'
// import 'antd/dist/antd.css' // or 'antd/dist/antd.less'
// import { Header, mainMenuItems, Support } from 'app-layout'
// import * as React from 'react'
// // import { useNavigate } from 'react-router-dom'

// import { useIntl } from 'app-layout'

// import { IntlProvider, FormattedMessage } from 'react-intl'

// import { Route, Routes, useNavigate } from 'react-router-dom'

// function App() {
//   const { language, messages } = useIntl()
//   const navigate = useNavigate()

//   console.log('🏒🏒🏒🏒 ', language        )

//   const renderRoutes = () => {
//     return (
//       <IntlProvider
//         messages={messages[language]}
//         locale={language}
//         defaultLocale="en"
//       >
//         <FormattedMessage
//           id="app.text"
//           defaultMessage="This is some text"
//           description="Link on react page"
//         />
//         <Routes>
//           {mainMenuItems.map((menuItem, i) => {
//             const { submenu } = menuItem

//             if (submenu) {
//               return submenu.map((subMenuItem, ii) => {
//                 return (
//                   <Route
//                     key={`submenu-item-${ii}`}
//                     path={`/${subMenuItem.key}`}
//                     element={subMenuItem.element}
//                   />
//                 )
//               })
//             }

//             return (
//               <Route
//                 key={i}
//                 path={`/${menuItem.key}`}
//                 element={menuItem.element}
//               />
//             )
//           })}
//           {/* <Route
//           path="/individuals"
//           element={
//             <RoutePage
//               title="Individuals"
//               subtitle="Bitcoin for Individuals"
//               body={<h1>Individual Body</h1>}
//               />
//             }
//         />
//         <Route
//         path="/businesses"
//         element={
//           <RoutePage
//           title="Businesses"
//           subtitle="Bitcoin for Businesses"
//           body={<h1>Businesses Body</h1>}
//           />
//         }
//         />
//         <Route
//         path="/developers"
//         element={
//           <RoutePage
//           title="Developers"
//           subtitle="Developer Info"
//           body={<h1>Developers Body</h1>}
//           />
//         }
//         />
//         <Route
//         path="/getting-started"
//         element={
//           <RoutePage
//           title="Getting Started"
//           subtitle="Getting Started"
//           body={<h1>Getting Started Body</h1>}
//           />
//         }
//         />
//         <Route
//         path="/how-it-works"
//         element={
//           <RoutePage
//           title="How It Works"
//           subtitle="How It Works"
//           body={<h1>How it Works Body</h1>}
//           />
//         }
//         />
//         <Route
//           path="/white-paper"
//           element={
//             <RoutePage
//             title="White Paper"
//             subtitle="White Paper"
//               body={<h1>White Paper Body</h1>}
//               />
//             }
//             />
//             <Route
//             path="/innovation"
//             element={
//               <RoutePage
//               title="Innovations"
//               subtitle="Innovations"
//               body={<h1>Innovations Body</h1>}
//               />
//             }
//           /> */}
//           <Route path="*" element={<Home />} />
//         </Routes>
//       </IntlProvider>
//     )
//   }

//   return (
//     <div className="App">
//       <Support />
//       <Header navigate={navigate} />
//       {renderRoutes()}
//     </div>
//   )
// }

// export default App

// const Home = () => {
//   return <p>Home Page Here</p>
// }
