import tw, { styled } from 'twin.macro';

export const Button = styled.button([
  tw`rounded bg-gray-200 px-3 py-2`,
  tw`focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2`,
  tw`hover:bg-gray-300 hover:focus:ring-gray-300`,
]);
