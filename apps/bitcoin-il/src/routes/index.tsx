import * as React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import { useTranslations } from '../hooks/useTranslations'
import { mainMenuItems } from './mainMenuItems'
import { nonMenuRoutes } from './nonMenuRoutes'
import NotARoute from '../layout/NotARoute'
import RoutePage from '../layout/RoutePage'
import { FormattedMessage } from '../components/FormattedMessageWithHover'
import ChooseWallet from '../components/ChooseWallet'
import YouShouldKnow from '../components/YouShouldKnow'
import SpendBitil from '../components/SpendBitil'
import TranslationsAdmin from '../components/TranslationsAdmin'

const RoutesProvider = () => {
  const intl = useTranslations()
  const { availableLanguages } = intl
  return (
    <Routes>
      {availableLanguages.map((lang, ii) => {
        const langCode = lang.name === 'en' ? '' : `${lang.name}/`
        return mainMenuItems.map((menuItem, i) => {
          const { submenu } = menuItem

          if (submenu) {
            return submenu.map((subMenuItem, ii) => {
              return (
                <Route
                  key={`submenu-item-${ii}`}
                  path={`/${langCode}${subMenuItem.key}`}
                  element={subMenuItem.element}
                />
              )
            })
          }

          return (
            <Route
              key={i}
              path={`/${langCode}${menuItem.key}`}
              element={menuItem.element}
            />
          )
        })
      })}

      {availableLanguages.map((lang, ii) => {
        const langCode = lang.name === 'en' ? '' : `${lang}/`
        nonMenuRoutes.map((route) => {
          return (
            <Route
              key={route.key}
              path={`/${langCode}${route.path}`}
              element={route.element}
            />
          )
        })
      })}

      {availableLanguages.map((lang, i) => {
        const base = lang.name === 'en' ? '' : lang.name
        return (
          <Route
            key={`base-route-${i}`}
            path={`${base}/`}
            element={<HomePage />}
          />
        )
      })}
      {/* English Routes */}
      <Route
        path="choose-your-wallet"
        element={
          <RoutePage
            id="choose-wallet"
            title={
              <FormattedMessage
                id="page.choose-wallet.title.menu"
                defaultMessage="Choose Your Wallet"
                description="Choose Wallet"
              />
            }
            subtitle={
              <FormattedMessage
                id="page.choose-wallet.subtitle"
                defaultMessage="Which Wallet Is For You?"
                description="Choose Wallet"
              />
            }
            body={<ChooseWallet />}
          />
        }
      />
      <Route
        path="you-should-know"
        element={
          <RoutePage
            id="you-should-know"
            title={
              <FormattedMessage
                id="page.you-should-know.title.menu"
                defaultMessage="Some things you need to know"
                description="You oughtta know!"
              />
            }
            subtitle={
              <FormattedMessage
                id="page.you-should-know.subtitle"
                defaultMessage="If you're getting started with Bitcoin, there are a few things you should know. Bitcoin lets you exchange money and transact in a different way than you normally do. As such, you should take time to inform yourself before using Bitcoin for any serious transaction. Bitcoin should be treated with the same care as your regular wallet, or even more in some cases!"
                description="You oughtta know subtitle"
              />
            }
            body={<YouShouldKnow />}
          />
        }
      />
      <Route
        path="spend-bitil"
        element={
          <RoutePage
            id="spend-bitil"
            title={
              <FormattedMessage
                id="page.spend.title.menu"
                defaultMessage="Spend BitCoin il"
                description="Spend title"
              />
            }
            subtitle={null}
            body={<SpendBitil />}
          />
        }
      />
      <Route
        path="translations-admin"
        element={
          <RoutePage
            id="translations-admin"
            title={
              <FormattedMessage
                id="page.translations-admin.title.menu"
                defaultMessage="Translations"
                description="Translations Header"
              />
            }
            subtitle={<></>}
            body={<TranslationsAdmin />}
          />
        }
      />
      {/* Hebrew Routes */}
      <Route
        path="/he/choose-your-wallet"
        element={
          <RoutePage
            id="choose-wallet"
            title={
              <FormattedMessage
                id="page.choose-wallet.title.menu"
                defaultMessage="Choose Your Wallet"
                description="Choose Wallet"
              />
            }
            subtitle={
              <FormattedMessage
                id="page.choose-wallet.subtitle"
                defaultMessage="Which Wallet Is For You?"
                description="Choose Wallet"
              />
            }
            body={<ChooseWallet />}
          />
        }
      />
      <Route
        path="/he/translations-admin"
        element={
          <RoutePage
            id="translations-admin"
            title={
              <FormattedMessage
                id="page.translations-admin.title.menu"
                defaultMessage="Translations"
                description="Translations Header"
              />
            }
            subtitle={<></>}
            body={<TranslationsAdmin />}
          />
        }
      />
      <Route
        path="/he/you-should-know"
        element={
          <RoutePage
            id="you-should-know"
            title={
              <FormattedMessage
                id="page.you-should-know.title.menu"
                defaultMessage="Some things you need to know"
                description="You oughtta know!"
              />
            }
            subtitle={
              <FormattedMessage
                id="page.you-should-know.subtitle"
                defaultMessage="If you're getting started with Bitcoin, there are a few things you should know. Bitcoin lets you exchange money and transact in a different way than you normally do. As such, you should take time to inform yourself before using Bitcoin for any serious transaction. Bitcoin should be treated with the same care as your regular wallet, or even more in some cases!"
                description="You oughtta know subtitle"
              />
            }
            body={<YouShouldKnow />}
          />
        }
      />
      <Route
        path="/he/spend-bitil"
        element={
          <RoutePage
            id="spend-bitil"
            title={
              <FormattedMessage
                id="page.spend.title.menu"
                defaultMessage="Spend BitCoin il"
                description="Spend title"
              />
            }
            subtitle={null}
            body={<SpendBitil />}
          />
        }
      />
      <Route path="*" element={<NotARoute />} />
    </Routes>
  )
}

export default RoutesProvider
