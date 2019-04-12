(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{169:function(e,t,r){"use strict";r.r(t);var a=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"windows-golden-images"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-golden-images","aria-hidden":"true"}},[e._v("#")]),e._v(" Windows Golden Images")]),a("h2",{attrs:{id:"prepare-image-streamer-with-windows-artifact-bundle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prepare-image-streamer-with-windows-artifact-bundle","aria-hidden":"true"}},[e._v("#")]),e._v(" Prepare Image Streamer with Windows Artifact Bundle")]),a("ul",[a("li",[e._v('Download the "HPE - Windows - 2018-10-26.zip" artifact bundle from the GitHub repository at '),a("a",{attrs:{href:"https://github.com/HewlettPackard/image-streamer-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/image-streamer-windows")]),e._v(". The file is available in the "),a("code",[e._v("artifact-bundles")]),e._v(" directory.  The artifacts are supported on HPE Image Streamer 4.1 and higher for Windows 2016,\nwhile version 4.2 and higher are required for Windows 2019. This solution has been tested using Windows 2016 on HPE Image Streamer 4.1.")]),a("li",[e._v("Upload the Artifact bundle to the Image Streamer appliance")]),a("li",[e._v("Extract the Artifact Bundle on the Image Streamer appliance")])]),a("h2",{attrs:{id:"create-windows-golden-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-windows-golden-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Create Windows Golden Image")]),a("p",[e._v("The procedure for creating a Windows Server 2016 golden image are documented in the Image Streamer GitHub repostiory at "),a("a",{attrs:{href:"https://github.com/HewlettPackard/image-streamer-windows",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/HewlettPackard/image-streamer-windows")]),e._v(". See the appropriate file in the "),a("code",[e._v("docs")]),e._v(" directory "),a("a",{attrs:{href:"https://github.com/HewlettPackard/image-streamer-windows/blob/v4.1/docs/HPE%20Synergy%20Image%20Streamer%20Microsoft%20Windows%20Artifact%20Bundle%20Documentation.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("here")]),e._v(".")]),a("p",[e._v("The instructions are repeated here for convenience, but you should rely on the Image Streamer repository for the definitive version of the documentation.")]),a("ol",[a("li",[e._v("Ensure that you have access to Windows 2016 or 2019 ISO file.")]),a("li",[e._v("Create a server profile with "),a("code",[e._v("“HPE - Foundation 1.0 - create empty OS Volume”")]),e._v(" as OS Deployment plan\nand a server hardware of desired hardware type (see section on Golden Image Compatibility below). Set\nan appropriate value for volume size in MiB units, say "),a("code",[e._v("40000 MiB")]),e._v(". The HPE Synergy Server will be\nconfigured for access to this empty OS Volume.")]),a("li",[e._v("Launch iLO Integrated Remote Console of this server and set the Windows 2016 or 2019 ISO file as\nvirtual CD-ROM/DVD image file. Power on the server.")]),a("li",[e._v("Windows should present an option of installing from CD/DVD. Continue with this option.")]),a("li",[e._v("Install Windows 2016 or 2019.")]),a("li",[e._v("(Optional) To take a backup of this installation at this stage:"),a("br"),e._v("\na. Shutdown the server"),a("br"),e._v('\nb. Perform an as-is capture using "HPE - Windows - Capture - As-Is" build plan to create the "as-is"\ngolden image of the OS.'),a("br"),e._v("\nc. Deploy another server with the golden image captured in previous step and boot the server.")]),a("li",[e._v("Install any additional software or roles if required.")])]),a("p",[e._v("NOTE: The next six steps can be automated using the “PrepareForImageStreamerOSVolumeCapture.ps1” script in “scripts” directory on the GitHub repository where Windows artifact bundles are available for download.")]),a("ol",{attrs:{start:"8"}},[a("li",[a("p",[e._v("Create a FAT32 partition which will be used by the artifacts for personalization:\nFAT 32 partition can be created either from UI using Disk Management utility (8.1) or using CMD Diskpart commands (8.2).")]),a("p",[e._v("8.1 FAT32 partition creation from UI")]),a("pre",[a("code",[e._v(' a. Open "Computer Management" > "Disk Management"\n b. Select C: partition\n c. Shrink volume\n d. Change amount of space to shrink to 100 MB\n e. Select Shrink\n f. Select new Unallocated space\n g. Select New Simple Volume\n h. Leave size\n i. Assign drive letter, (Choose S)\n j. Format as FAT32 file system type (this requires changing from the default)\n k. Give Volume label as "ISDEPLOY"\n l. Finish\n m. “ISDEPLOY (S:)” should be shown\n')])]),a("p",[e._v("8.2 FAT32 partition creation using CMD commands"),a("br"),e._v("\nUse list volume command to get volume number for C: partition. Here C: partition resides in Volume 0.")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("C:\\Users\\Administrator>diskpart \nDISKPART>list volume \nDISKPART >select volume 0 \nDISKPART >shrink desired=100 \nDISKPART >create partition primary size=100 \nDISKPART >format fs=fat32 quick label=ISDEPLOY \nDISKPART >assign letter=S\n")])])]),a("li",[a("p",[e._v("Backup drive-letters")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("reg export HKLM\\System\\MountedDevices C:\\driveletters.reg\n")])])]),a("li",[a("p",[e._v("Generalize Windows using sysprep")]),a("p",[e._v("WARNING: This operation is destructive and will remove all configuration. To take backup of the system at this stage, capture an as-is golden image.")]),a("p",[e._v("Open Command Prompt window and run the following")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("cd Windows\\System32\\Sysprep \nSysprep /generalize /oobe /quit\n")])]),a("p",[e._v("This will take a few minutes to complete and will generalize the system. All settings will be lost. This does not remove any additional user accounts that are created. Any user accounts not required in the captured golden image must be manually deleted.")])]),a("li",[a("p",[e._v("Restore drive-letters")])])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("reg import C:\\driveletters.reg\n")])]),a("ol",{attrs:{start:"12"}},[a("li",[e._v("Set Unattend.xml location to the FAT32 partition")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('reg add HKLM\\System\\Setup /v UnattendFile /t REG_SZ /d "S:\\ISdeploy\\Unattend.xml"\n')])]),a("ol",{attrs:{start:"13"}},[a("li",[e._v("Set SetupComplete.cmd location to the FAT32 partition")])]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("mkdir C:\\Windows\\Setup\\Scripts \necho S:\\ISdeploy\\SetupComplete.cmd > C:\\Windows\\Setup\\Scripts\\SetupComplete.cmd\n")])]),a("ol",{attrs:{start:"14"}},[a("li",[a("p",[e._v("Shutdown the server.")])]),a("li",[a("p",[e._v('Capture a golden image using the "HPE - Windows - Capture - As-Is" build plan as described in the following section.')])])]),a("h2",{attrs:{id:"capture-the-golden-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capture-the-golden-image","aria-hidden":"true"}},[e._v("#")]),e._v(" Capture the Golden Image")]),a("ul",[a("li",[a("p",[e._v("Determine the OS Volume that was created for the Server Profile created earlier\n"),a("img",{attrs:{src:r(50),alt:' "Server profile"'}})]),a("p",[a("strong",[e._v("Figure.")]),e._v(" Server profile")])]),a("li",[a("p",[e._v("Navigate to the Image Streamer Golden Images page")])]),a("li",[a("p",[e._v('Select "Create golden image" specifying the OS Volume and the "HPE - Windows - Capture - As-Is" build plan:\n'),a("img",{attrs:{src:r(51),alt:' "Create Golden Image"'}})]),a("p",[a("strong",[e._v("Figure.")]),e._v(" Create Golden Image")])]),a("li",[a("p",[e._v('Select "Create"')])]),a("li",[a("p",[e._v('Delete the Server Profile "Windows Template" used to create the golden image')])])]),a("h2",{attrs:{id:"golden-image-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#golden-image-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Golden Image Compatibility")]),a("p",[e._v("The golden image created using the above method will work only when the image is deployed on server hardware of\nthe same model. Specifically, if the number of processors on server where the image is deployed is different from the\nserver where the image was captured, server boot after deployment will fail. Also, if the boot controller is moved from\none Mezzanine slot on the server to another, Windows will not boot correctly.")])])}],i=r(0),o=Object(i.a)({},function(){this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);t.default=o.exports},50:function(e,t,r){e.exports=r.p+"assets/img/bm-win-server-profile.8c815af6.png"},51:function(e,t,r){e.exports=r.p+"assets/img/bm-win-create-golden-image.988951f7.png"}}]);