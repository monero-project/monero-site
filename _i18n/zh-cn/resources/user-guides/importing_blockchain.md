{% include disclaimer.html translated="no" translationOutdated="no" %}

### 目的和警告

大多数人不需要这个。如果想要使用门罗币，打开软件它就会用点对点网络自我同步了。一般情况下，这比这篇文章中指导的下载与导入方法要快得多。因为你不只是从一个单独的服务器下载，而是通过很多中继，并且门罗币@节点进程会在接收到一个区块以后立刻对其进行验证，而不是下载完成以后单独验证。

这个选项对于开发者一般很有用，如果你遇见了一些不寻常的让你无法正常同步的问题它也能派上用场。

**Never** use the dangerous unverified import option, it is strictly for experts only. Especially, don't use it with any blockchain you download from the Internet. It is only safe to use if a) you are importing a file that you exported locally, yourself *and* b) you are absolutely sure it was already fully and properly verified before exporting.

### 第一步

找到门罗币程序安装的路径。比如说笔者的是：

`D:\monero-gui-0.10.3.1`

根据你版本的不同和你安装位置的不同，你的路径可能会不同。

### 第二步

找到你下载好的区块链文件的路径。比如说笔者的是：

`C:\Users\KeeJef\Downloads\blockchain.raw`

因为你选择的下载位置可能不同，这个路径在你的设备也大概会不同。

### 第三步

打开一个命令提示符（终端）窗口。你可以通过按下Windows徽标键+R字母键，然后在弹出的窗口中输入`CMD`并回车来打开它。

### 第四步

现在你需要在CMD窗口定位你的门罗币软件的路径。你可以通过输入这个来做到这一点：

`cd C:\[你的门罗币软件路径]`

它应该看起来像是这样的：

`cd D:\monero-gui-0.10.3.1`

If your Monero software is on another drive you can use `DriveLetter:` for
example if your Monero software was on your D drive then before using the cd
command you would do `D:`

### 第五步

Now type in your command prompt window:

`monero-blockchain-import --input-file C:\YOUR\BLOCKCHAIN\FILE\PATH\HERE`

For example I would type :

`monero-blockchain-import --input-file
C:\Users\KeeJef\Downloads\blockchain.raw`

### 第一步

After the blockchain has finished syncing up you can open your Monero wallet
normally. Your downloaded blockchain.raw can be deleted.
