import React from "react"
import { connect, Global, css, styled } from "frontity"
import Link from "@frontity/components/link"
import Switch from '@frontity/components/switch'
import List from '../components/list'
import Post from '../components/post'
import Page from '../components/page'

const Root = ({ state }) => {
  const data = state.source.get(state.router.link)
  return (
    <>
      <Global styles={css`
        * {
          margin: 0; padding: 0; box-sizing: border-box; background-color: black; color: white;
        }
        html {
          font-family: system-ui, Verdana, Arial, sans-serif;
        }
      `} />
      <Header>
        <h1>Absolute</h1>
      </Header>
      <NavBox>
        <Nav>
          <Link link='/'>Home</Link>
          <Link link='/entertainment'>Entertainment</Link>
          <Link link='/sports'>Sports</Link>
          <Link link='/sports'>Tech</Link>

        </Nav>
      </NavBox>


      <Switch>
        <List when={data.isArchive} />
        <Post when={data.isPost} />
        <Page when={data.isPage} />
      </Switch>

    </>
  )
}

export default connect(Root)

const Header = styled.header`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
`
const NavBox = styled.div`
  width: 90%; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; height: 4rem; border-bottom: 1px solid white;
`

const Nav = styled.nav`
  display: flex; 

  a {
    text-decoration: none;
    margin-left: 1rem;
  }
`