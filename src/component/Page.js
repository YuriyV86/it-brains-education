import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(90.93deg, #16659e 35.68%, #7a8290 89.55%);

  /* робимо фон на всю ширину */
  width: 100%;
`;
