import { css, } from 'lit-element';


export default css`:host {
  display: block;
  box-sizing: border-box;
  cursor: pointer;
  @apply --breaking-bad-profile-card; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

.container {
  max-width: 300px;
  height: fit-content;
  margin-bottom: 0.625rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 2px 2px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 0.625rem;
  overflow: hidden; }

.header {
  position: relative;
  width: 300px;
  height: 300px; }

img {
  width: 100%;
  height: 100%; }

.title {
  position: absolute;
  background: #202329;
  width: 100%;
  opacity: 0.8;
  bottom: 0;
  padding: 0.625rem; }
  .title h2 {
    color: #f5f5f5;
    font-size: 1.625rem;
    font-weight: 400;
    font-stretch: expanded;
    margin: 0px; }
  .title p {
    color: #bbbbbb;
    font-size: 0.875rem;
    margin: 0px; }

.info {
  height: 100%;
  color: #5DED79;
  padding: 1.25rem;
  background: #333333; }

.data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0.75rem 0px 0.375rem;
  border-bottom: 1px solid #444444; }
  .data span {
    font-size: 0.7rem;
    font-weight: 400;
    color: #9e9e9e;
    width: 50%; }
  .data p {
    width: 50%;
    font-size: 0.9rem;
    font-weight: 200;
    text-align: right;
    padding: 0px;
    margin: 0px; }
`;