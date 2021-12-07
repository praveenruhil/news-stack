import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: ${({ cols = '1', min = '200px', max = '1fr' }) =>
    `repeat(${cols}, minmax(${min}, ${max}))`};
`
export const StyledLink = styled.a.attrs(() => ({
  rel: 'noreferrer',
  target: '_blank',
}))`
  line-height: 2;
  word-spacing: 2px;
  overflow-wrap: break-word;
`
