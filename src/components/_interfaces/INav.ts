import { IHTMLBasicProps } from './IHTMLBasic';
interface INavItem{
  name: string;
  route: string;
}
export interface INavItems extends Array<INavItem>{}
export class INavBarProps{
  public nav: IHTMLBasicProps;
  public navItems: INavItems;
  public hash: boolean = false;
  public navSelectedBehaviour: boolean = false;
  constructor(nav: IHTMLBasicProps, navItems: INavItems, 
              hash: boolean, navSelectedBehaviour:boolean) {
    this.nav = nav;
    this.navItems = navItems;
    this.hash = hash;
    this.navSelectedBehaviour = navSelectedBehaviour;
  }
}
