"use strict";(self.webpackChunkdeveloper_documentation=self.webpackChunkdeveloper_documentation||[]).push([[747],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,m=u["".concat(l,".").concat(h)]||u[h]||p[h]||o;return a?r.createElement(m,s(s({ref:t},c),{},{components:a})):r.createElement(m,s({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1611:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:2},s="Self Host Edge server (local)",i={unversionedId:"deploy-edge-servers/local-edge-server",id:"deploy-edge-servers/local-edge-server",title:"Self Host Edge server (local)",description:"Datafi Edge servers are containerized, It can be run anywhere a docker container can run. If you don't have a docker environment, you can start by installing docker in your server.",source:"@site/docs/3.deploy-edge-servers/2.local-edge-server.md",sourceDirName:"3.deploy-edge-servers",slug:"/deploy-edge-servers/local-edge-server",permalink:"/docs/deploy-edge-servers/local-edge-server",draft:!1,editUrl:"https://github.com/datafilabs/developer-documentation/tree/main/docs/3.deploy-edge-servers/2.local-edge-server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Deploy Edge Servers",permalink:"/docs/deploy-edge-servers/deploy-edge-servers"},next:{title:"References",permalink:"/docs/category/references"}},l={},d=[{value:"Step 2: Configure your Dataset",id:"step-2-configure-your-dataset",level:2},{value:"Overview",id:"overview",level:3},{value:"Schema",id:"schema",level:3},{value:"Users",id:"users",level:3},{value:"Rules",id:"rules",level:3},{value:"Step 3: Viewing your data",id:"step-3-viewing-your-data",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"self-host-edge-server-local"},"Self Host Edge server (local)"),(0,n.kt)("p",null,"Datafi Edge servers are containerized, It can be run anywhere a docker container can run. If you don't have a docker environment, you can start by installing docker in your server."),(0,n.kt)("p",null,"Complete the following steps to setup a local Edge Server."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Our goal here is to run an edge server in your local machine and connect to a MySQL DB. You can use the same steps to connect any other datasource by changing the dfcli parameters")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Docker Desktop and complete the setup steps (ref: ",(0,n.kt)("a",{href:"https://www.docker.com/products/docker-desktop",target:"_blank"},(0,n.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop"},"https://www.docker.com/products/docker-desktop"))," )")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Verify Docker has been setup by running the following and confirm ",(0,n.kt)("strong",{parentName:"p"},"Hello from Docker!")," reply:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"docker run hello-world\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the terminal and pull&run the latest datafi CLI container image with the following command:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull datafi/cli:latest\ndocker run --rm -ti -v ~/Downloads:/es/out datafi/cli:latest\n")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"the CLI container will generate it's outputs in the /es/out folder, the above command attach a local directory (",(0,n.kt)("inlineCode",{parentName:"p"},"~/Downloads"),"), so that you can access those files later. Instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"~/Downloads")," you can use any local directory."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The previous step will run cli container which will have ",(0,n.kt)("inlineCode",{parentName:"p"},"dfcli")," installed. use ",(0,n.kt)("inlineCode",{parentName:"p"},"dfcli")," to generate environment variables which should be used while running the edge-server. run this command in the bash shell opened as part of previous step"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'dfcli dataset --endpoint <IP address or host name where the edge-server will be running> --type mysql --name "MyNewDataset" --pointOfContact <your email address>  --address <host name of the mysql db> --dbname <database name>  --username <database user> --password <database password> add\n\n')),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"The above command adds a MySQL db, If you want to add a different datasource the parameter used might be slighly different. you can run ",(0,n.kt)("inlineCode",{parentName:"p"},"dfcli dataset")," to see the parameters for the available data sources.")),(0,n.kt)("p",{parentName:"li"},"This will try to connect to the db with the provided credentials and inspect the schema of the db. If its successful, It will generate a ",(0,n.kt)("inlineCode",{parentName:"p"},"key.txt")," file in the ",(0,n.kt)("inlineCode",{parentName:"p"},"es/out")," folder which you should note down as we will be using that in the next step while running the container (In this case as we mounted es/host to ~/Downloads, we will be able to see the file in ~/Downloads) . In addition to this you will also get a link to connect the new dataset you added to your Datafi Workspace."),(0,n.kt)("p",{parentName:"li"},"Once you note down both, you can enter ",(0,n.kt)("inlineCode",{parentName:"p"},"exit")," which will exit the CLI and returns you back to your local terminal.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"now run the edge server container with the key as an environment variable."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull datafi/es:latest\ndocker run --rm -p 443:443 -e KEY=$(cat ~/Downloads/key.txt)  datafi/es:latest\n")),(0,n.kt)("p",{parentName:"li"},"this will run the edge-server, and you should see ",(0,n.kt)("inlineCode",{parentName:"p"},"Edge server started")," in the logs")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use the link above (eg: ",(0,n.kt)("a",{parentName:"p",href:"https://home.datafi.us/datasets/add/0ZyN9zdXIoVJBqcgk"},"https://home.datafi.us/datasets/add/0ZyN9zdXIoVJBqcgk"),") to connect the edge-server to your Datafi workspace. Before clicking on the link, make sure you have already ",(0,n.kt)("a",{parentName:"p",href:"https://home.datafi.us/register"},"signed up for a Free Datafi Account")," and is currently logged in into your workspace."))),(0,n.kt)("h2",{id:"step-2-configure-your-dataset"},"Step 2: Configure your Dataset"),(0,n.kt)("p",null,"After Completing the step 1, you should see the Edit Dataset dialog which will allow you to configure and edit the details for the dataset you just added. The four tabs we will look at for configuring a dataset are: Overview, Schema, Users, and Rules.If you are not planning to invite other users to your workspace, then the Overview page is probably the only section you need to complete."),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Save")," continue and proceed to ",(0,n.kt)("a",{parentName:"p",href:"#step-3-viewing-your-data"},(0,n.kt)("strong",{parentName:"a"},"Step 3"))),(0,n.kt)("p",null,"(The dialog can be accessed again any time by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Edit")," icon of the dataset you are currently active on, in case you close it before you are finished or want to make a change.)"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"In the dataset Overview you can update the name, description, and tags for your dataset. This information is used to help other users find this dataset and it\u2019s contents."),(0,n.kt)("h3",{id:"schema"},"Schema"),(0,n.kt)("p",null,"The Schema section allows you to configure how the dataset is viewed by users with the ability to change the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Icons next to fields names allow creating Dataview Links (which are similar to database joins) and External Links which allow you to link to URLs based on the data in the fields.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Catalog Name is the visible name users will see for fields and tables.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Accessibility Controls are the following:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Access can be turned on/off completely for a field with this slider"),(0,n.kt)("li",{parentName:"ul"},"Confidentiality - This drop down allows you, the data owner, to specify a confidentiality level for each field. Users with higher values directly or indirectly assigned are able to see the value."),(0,n.kt)("li",{parentName:"ul"},"Sensitivity - This drop down allows you, the data owner, to specify a sensitivity level for each field. Users with higher values directly or indirectly assigned are able to see the field."),(0,n.kt)("li",{parentName:"ul"},"Identity - - This drop down allows you, the data owner, to specify an identity level for each field. Users with higher values directly or indirectly assigned are able to see the field."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"renaming tables and fields to have more user friendly names where necessary.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The trashcan icon allows a table (aka datafile) within the dataset to be removed from view within the system; however, it does not change the underlying table and dataset."))),(0,n.kt)("p",null,"The Schema section allows you to configure the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"accessability control, determining if any specific tables or fields should be hidden/blocked."),(0,n.kt)("li",{parentName:"ul"},"renaming tables and fields to have more user friendly names where necessary."),(0,n.kt)("li",{parentName:"ul"},"Dataset level access rating for tables and fields can be set to have a more in depth control over who can see what information in your dataset. (",(0,n.kt)("a",{parentName:"li",href:"#access-rating-explained"}," More details about Access Ratings "),")")),(0,n.kt)("h3",{id:"users"},"Users"),(0,n.kt)("p",null,"The User section allows you to modify access your dataset Users must be previously"),(0,n.kt)("p",null,"Data Owners are the users with the privilege to modify all aspects of the dataset. All users in this category will have full access to the dataset and the ability to modify the access to the dataset."),(0,n.kt)("p",null,"Data Users is the section where users with limited rights are created and managed. Each user added in this section can have specific values for Confidentiality, Sentitivity, and Identity. When assigned a value users can see any element with a rating less than or equal to the users assigned value."),(0,n.kt)("p",null,"Teams allow users to be grouped and access levels to be assigned based on the group."),(0,n.kt)("h3",{id:"rules"},"Rules"),(0,n.kt)("p",null,"The rules sections allows you to create rules that can mask specific fields in your dataset's tables. Rules control how data is seen by users when their specific grants are less than the values necessary to see specific fields. (",(0,n.kt)("a",{parentName:"p",href:"#rule-policies-explained"}," more details on rules "),")"),(0,n.kt)("h2",{id:"step-3-viewing-your-data"},"Step 3: Viewing your data"),(0,n.kt)("p",null,"On the ",(0,n.kt)("a",{parentName:"p",href:"https://dataficloud.com/dataview"},"Dataview")," page you will be able to see a list of datasource that you have access to on the left side of you screen. Choosing a table from one of them will open the contents of that dataset that your ",(0,n.kt)("a",{parentName:"p",href:"#access-rating-explained"},"Access Rating")," permits, and mask fields according to any rules applied to that dataset."))}p.isMDXComponent=!0}}]);